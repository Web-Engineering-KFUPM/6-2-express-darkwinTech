import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();

app.use(cors());
app.get("/", (_req, res) => {
    res.send("Quote Generator API");
});

app.get("/api/quote", (_req, res) => {
    const quote = getRandomQuote();
    res.json({ quote });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});