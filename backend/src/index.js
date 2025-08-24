// --- Imports (ESM) ---
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import itemsRoutes from "./routes/items.js";


// Load env once, early
dotenv.config();

// ESM-friendly __dirname / __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Route imports ---
import cmsRoutes from "./routes/cmsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import seoRoutes from "./routes/seoRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import invoiceDetailRoutes from "./routes/invoiceDetailRoutes.js";
// If your file is actually spelled "inoviceRoutes.js", change this next line back to that path.
import invoiceRoutes from "./routes/invoiceRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import paymentMethodRoutes from "./routes/paymentMethodRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";

// --- App setup ---
const app = express();

// Security middlewares
app.use(helmet());

// Only allow your frontend origin (default: http://localhost:3000)
const allowedOrigins = [process.env.FRONTEND_ORIGIN || "http://localhost:3000"];
app.use(
  cors({
    origin(origin, cb) {
      // allow same-origin/no-Origin requests (curl/postman)
      if (!origin) return cb(null, true);
      return allowedOrigins.includes(origin)
        ? cb(null, true)
        : cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// Basic rate limiting: 300 req/min/IP
app.use(
  rateLimit({
    windowMs: 60_000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Parse JSON bodies
app.use(express.json());

// Health check (must be before 404)
app.get("/healthz", (_req, res) => res.status(200).send("ok"));

// Static files for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Welcome route
app.get("/", (_req, res) => {
  res.send("Welcome to the ESDA Backend API");
});

// --- Mount API routes ---
app.use("/api/cms", cmsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/invoiceDetails", invoiceDetailRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/paymentMethods", paymentMethodRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/settings", settingRoutes);
app.use("/api/items", itemsRoutes);




// 404 handler (keep last)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 4000;
console.log("[BOOT] about to listen on", PORT);
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
