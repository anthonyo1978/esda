import { Router } from "express";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const r = Router();

// GET /api/items -> list items
r.get("/", async (_req, res) => {
  const items = await prisma.item.findMany({ orderBy: { createdAt: "desc" } });
  res.json(items);
});

// POST /api/items -> create { title }
const CreateItem = z.object({ title: z.string().min(1).max(200) });

r.post("/", async (req, res) => {
  const parsed = CreateItem.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  const item = await prisma.item.create({ data: parsed.data });
  res.status(201).json(item);
});

export default r;
