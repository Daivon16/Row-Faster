import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();                 // loads OPENAI_API_KEY from .env
const openai = new OpenAI();

const app = express();
app.use(express.json());         // parse JSON bodies

// Health check
app.get("/", (_req, res) => res.send("Row‑Faster API up! 🚣"));

// New AI‑powered endpoint
app.post("/coach", async (req, res) => {
  const { splits } = req.body;   // e.g. { "splits": [2.05, 2.07, 2.08] }

  if (!Array.isArray(splits)) {
    return res.status(400).json({ error: "splits must be an array" });
  }

  // Convert potential numeric strings and validate
  const parsed = splits.map((s: unknown) => Number(s));
  if (parsed.some((n) => Number.isNaN(n))) {
    return res
      .status(400)
      .json({ error: "splits must contain only numeric values" });
  }

  try {
    const reply = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `My last rowing workout splits were ${parsed
            .map((n) => n.toFixed(2))
            .join(", ")} sec/500m. Give me 3 coaching tips to improve.`,
        },
      ],
    });

    res.json({ advice: reply.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI coaching failed" });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`🚀  Server running on http://localhost:${port}`)
);
