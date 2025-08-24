import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all CMS entries
export const getSeoList = async (req, res) => {
  const seoList = await prisma.seo.findMany();
  res.json(serializeBigInt(seoList));
};

// Get CMS entry by ID
export const getSeoById = async (req, res) => {
  try {
    const { id } = req.params;
    const seo = await prisma.seo.findUnique({
      where: { id: BigInt(id) },
    });
    if (!seo) {
      return res.status(404).json({ error: 'SEO entry not found' });
    }
    res.json(serializeBigInt(seo));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create CMS entry
export const createSeo = async (req, res) => {
  const data = req.body;
  const seo = await prisma.seo.create({ data });
  res.status(201).json(serializeBigInt(seo));
};

// Update CMS entry
export const updateSeo = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const seo = await prisma.seo.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(seo));
};

// Delete CMS entry
export const deleteSeo = async (req, res) => {
  const { id } = req.params;
  await prisma.seo.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};