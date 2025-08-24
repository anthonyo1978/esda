import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all Subscriptions entries
export const getSubscriptionsList = async (req, res) => {
  const subscriptionsList = await prisma.subscriptions.findMany();
  res.json(serializeBigInt(subscriptionsList));
};

// Get Subscriptions entry by ID
export const getSubscriptionsById = async (req, res) => {
  try {
    const { id } = req.params;
    const subscriptions = await prisma.subscriptions.findUnique({
      where: { id: BigInt(id) },
    });
    if (!subscriptions) {
      return res.status(404).json({ error: 'Subscriptions entry not found' });
    }
    res.json(serializeBigInt(subscriptions));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create Subscriptions entry
export const createSubscriptions = async (req, res) => {
  const data = req.body;
  const subscriptions = await prisma.subscriptions.create({ data });
  res.status(201).json(serializeBigInt(subscriptions));
};

// Update Subscriptions entry
export const updateSubscriptions = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const subscriptions = await prisma.subscriptions.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(subscriptions));
};

// Delete Subscriptions entry
export const deleteSubscriptions = async (req, res) => {
  const { id } = req.params;
  await prisma.subscriptions.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};