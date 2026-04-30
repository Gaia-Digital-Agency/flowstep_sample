import "dotenv/config";
import express from "express";
import rateLimit from "express-rate-limit";
import payload from "payload";
import { contactHandler } from "./endpoints/contact";

const PORT = Number(process.env.PORT || 3030);

const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: "100kb" }));

// Rate-limit the contact form: 5 requests / 15 min per IP.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { ok: false, error: "rate_limited" },
});

async function start() {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is not set — refusing to start");
  }
  if (!process.env.DATABASE_URI) {
    throw new Error("DATABASE_URI is not set — refusing to start");
  }

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Public contact endpoint — registered AFTER payload.init so payload routes
  // own /api/* but our /api/contact override matches first via app.post.
  app.post("/api/contact", contactLimiter, contactHandler);

  app.get("/healthz", (_req, res) => res.json({ ok: true }));

  app.listen(PORT, () => {
    payload.logger.info(`Flowstep CMS listening on http://127.0.0.1:${PORT}`);
  });
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("Fatal error during CMS startup:", err);
  process.exit(1);
});
