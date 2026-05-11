const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

const PORT = process.env.PORT || 3050;

const DATA_DIR = path.join(__dirname, "data");
const UPLOAD_DIR = path.join(__dirname, "uploads", "fotos");
const DATA_FILE = path.join(DATA_DIR, "state.json");
const PUBLIC_DIR = path.join(__dirname, "public");

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const emptyState = {
  chat: [],
  expenses: [],
  bookings: [],
  documents: [],
  checklist: [],
  dayPlans: [],
  favorites: [],
  pending: [],
  photos: [],
  updatedAt: new Date().toISOString()
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function readState() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      writeState(clone(emptyState));
      return clone(emptyState);
    }

    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (err) {
    console.warn("Error leyendo state:", err.message);
    return clone(emptyState);
  }
}

function writeState(state) {
  state.updatedAt = new Date().toISOString();
  fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2));
}

function broadcastState() {
  io.emit("state:update", readState());
}

function uuid() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const allowedTypes = [
  "chat",
  "expenses",
  "bookings",
  "documents",
  "checklist",
  "dayPlans",
  "favorites",
  "pending"
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname || ".jpg") || ".jpg";
    cb(null, `${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`);
  }
});

const upload = multer({ storage });

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.emit("state:update", readState());

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

app.get("/api/state", (req, res) => {
  res.json({
    ok: true,
    state: readState()
  });
});

app.post("/api/item/:type", (req, res) => {
  const type = req.params.type;

  if (!allowedTypes.includes(type)) {
    return res.status(400).json({
      ok: false,
      error: "Tipo no permitido"
    });
  }

  const state = readState();

  const item = {
    ...req.body,
    id: req.body.id || uuid(),
    createdAt: req.body.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const list = Array.isArray(state[type]) ? state[type] : [];
  const index = list.findIndex((x) => x.id === item.id);

  if (index >= 0) {
    list[index] = item;
  } else {
    list.push(item);
  }

  state[type] = list;

  writeState(state);
  broadcastState();

  res.json({
    ok: true,
    item,
    state
  });
});

app.put("/api/list/:type", (req, res) => {
  const type = req.params.type;

  if (!allowedTypes.includes(type)) {
    return res.status(400).json({
      ok: false,
      error: "Tipo no permitido"
    });
  }

  const state = readState();

  state[type] = Array.isArray(req.body.items) ? req.body.items : [];

  writeState(state);
  broadcastState();

  res.json({
    ok: true,
    state
  });
});

app.delete("/api/item/:type/:id", (req, res) => {
  const type = req.params.type;
  const state = readState();

  if (!Array.isArray(state[type])) {
    return res.status(400).json({
      ok: false,
      error: "Tipo no válido"
    });
  }

  state[type] = state[type].filter((x) => x.id !== req.params.id);

  writeState(state);
  broadcastState();

  res.json({
    ok: true,
    state
  });
});

app.post("/api/photos", upload.array("photos", 30), (req, res) => {
  const state = readState();

  const day = req.body.day || "Viaje";
  const caption = req.body.caption || "";

  const photos = (req.files || []).map((file) => ({
    id: uuid(),
    day,
    caption,
    image: `/uploads/fotos/${file.filename}`,
    url: `/uploads/fotos/${file.filename}`,
    createdAt: new Date().toISOString()
  }));

  state.photos = [...photos, ...(state.photos || [])];

  writeState(state);
  broadcastState();

  res.json({
    ok: true,
    photos,
    state
  });
});

app.delete("/api/photos/:id", (req, res) => {
  const state = readState();

  const photo = (state.photos || []).find((x) => x.id === req.params.id);

  if (photo?.image) {
    const filePath = path.join(
      __dirname,
      photo.image.replace("/uploads/", "uploads/")
    );

    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        console.warn("Error borrando archivo:", err.message);
      }
    }
  }

  state.photos = (state.photos || []).filter(
    (photo) => photo.id !== req.params.id
  );

  writeState(state);
  broadcastState();

  res.json({
    ok: true,
    state
  });
});

app.get("/api/export", (req, res) => {
  const state = readState();

  res.setHeader(
    "Content-Disposition",
    'attachment; filename="viaje-pais-vasco-backup.json"'
  );

  res.json(state);
});

app.use(express.static(PUBLIC_DIR));

app.use((req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`API + PWA Viaje País Vasco activa en puerto ${PORT}`);
});