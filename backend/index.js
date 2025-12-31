import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import OpenAI from "openai";


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* ---------- TEST ROUTE ---------- */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ---------- PROJECTS API ---------- */
const projects = [
  {
    id: 1,
    title: "Interactive Portfolio",
    description: "Personal portfolio built with React, Tailwind, and Node.js.",
    tech: ["React", "Tailwind", "Node.js"],
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "CRUD task manager with REST API.",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

/* ---------- AI CHAT API ---------- */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const messages = req.body.messages;

    const systemPrompt = {
      role: "system",
      content: `
You are Gouse, a friendly and confident Software Developer Intern.
You answer questions about:
- Your skills (React, Tailwind, Node.js, Express, Git, basics of AI)
- Your projects
- Your learning mindset and career goals

Keep answers short, clear, and positive.
`,
    };

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemPrompt, ...messages],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI error" });
  }
});

/* ---------- START SERVER (LAST LINE) ---------- */
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
