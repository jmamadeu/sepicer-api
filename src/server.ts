import express from "express";

const app = express();

app.get("/", (_, response) => response.json({ ok: true }));

app.listen(3333, () => console.log("server is now running!"));
