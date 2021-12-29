import express from "express";

const httpServer = express();

httpServer.get("/", (_, response) => response.json({ ok: true }));

export { httpServer };
