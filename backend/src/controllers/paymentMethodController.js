import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all CMS entries
export const getPaymentMethodsList = async (req, res) => {
  const cmsList = await prisma.payment_methods.findMany();
  res.json(serializeBigInt(cmsList));
};

// Get CMS entry by ID
export const getPaymentMethodsById = async (req, res) => {
  try {
    const { id } = req.params;
    const cms = await prisma.payment_methods.findUnique({
      where: { id: BigInt(id) },
    });
    if (!cms) {
      return res.status(404).json({ error: 'CMS entry not found' });
    }
    res.json(serializeBigInt(cms));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create CMS entry
export const createPaymentMethods = async (req, res) => {
  const data = req.body;
  const cms = await prisma.payment_methods.create({ data });
  res.status(201).json(serializeBigInt(cms));
};

// Update CMS entry
export const updatePaymentMethods = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const cms = await prisma.payment_methods.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(cms));
};

// Delete CMS entry
export const deletePaymentMethods = async (req, res) => {
  const { id } = req.params;
  await prisma.payment_methods.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};