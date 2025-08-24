import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all invoice details entries
export const getInvoiceDetailsList = async (req, res) => {
  const cmsList = await prisma.invoice_details.findMany();
  res.json(serializeBigInt(cmsList));
};

// Get invoice details entry by ID
export const getInvoiceDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const cms = await prisma.invoice_details.findUnique({
      where: { id: BigInt(id) },
    });
    if (!cms) {
      return res.status(404).json({ error: 'Invoice details entry not found' });
    }
    res.json(serializeBigInt(cms));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create invoice details entry
export const createInvoiceDetails = async (req, res) => {
  const data = req.body;
  const cms = await prisma.invoice_details.create({ data });
  res.status(201).json(serializeBigInt(cms));
};

// Update invoice details entry
export const updateInvoiceDetails = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const cms = await prisma.invoice_details.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(cms));
};

// Delete invoice details entry
export const deleteInvoiceDetails = async (req, res) => {
  const { id } = req.params;
  await prisma.invoice_details.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};