import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all Invoices entries
export const getInvoiceList = async (req, res) => {
  const cmsList = await prisma.invoices.findMany();
  res.json(serializeBigInt(cmsList));
};

// Get Invoices entry by ID
export const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const cms = await prisma.invoices.findUnique({
      where: { id: BigInt(id) },
    });
    if (!cms) {
      return res.status(404).json({ error: 'Invoices entry not found' });
    }
    res.json(serializeBigInt(cms));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create Invoices entry
export const createInvoice = async (req, res) => {
  const data = req.body;
  const cms = await prisma.invoices.create({ data });
  res.status(201).json(serializeBigInt(cms));
};

// Update Invoices entry
export const updateInvoice = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const cms = await prisma.invoices.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(cms));
};

// Delete Invoices entry
export const deleteInvoice = async (req, res) => {
  const { id } = req.params;
  await prisma.invoices.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};