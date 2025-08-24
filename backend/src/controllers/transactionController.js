import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all Subscriptions entries
export const getTransactionsList = async (req, res) => {
  const transactionsList = await prisma.transactions.findMany();
  res.json(serializeBigInt(transactionsList));
};

// Get Subscriptions entry by ID
export const getTransactionsById = async (req, res) => {
  try {
    const { id } = req.params;
    const transactions = await prisma.transactions.findUnique({
      where: { id: BigInt(id) },
    });
    if (!transactions) {
      return res.status(404).json({ error: 'Transactions entry not found' });
    }
    res.json(serializeBigInt(transactions));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create Subscriptions entry
export const createTransactions = async (req, res) => {
  const data = req.body;
  const transactions = await prisma.transactions.create({ data });
  res.status(201).json(serializeBigInt(transactions));
};

// Update Subscriptions entry
export const updateTransactions = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const transactions = await prisma.transactions.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(transactions));
};

// Delete Subscriptions entry
export const deleteTransactions = async (req, res) => {
  const { id } = req.params;
  await prisma.transactions.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};