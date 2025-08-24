import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all clients
export const getClientsList = async (req, res) => {
  const clientsList = await prisma.clients.findMany();
  res.json(serializeBigInt(clientsList));
};

// Get client by ID
export const getClientsById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await prisma.clients.findUnique({
      where: { id: BigInt(id) },
    });
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(serializeBigInt(client));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create client entry
export const createClient = async (req, res) => {
  const data = req.body;
  const client = await prisma.clients.create({ data });
  res.status(201).json(serializeBigInt(client));
};

// Update client entry
export const updateClient = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const client = await prisma.clients.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(client));
};

// Delete client entry
export const deleteClient = async (req, res) => {
  const { id } = req.params;
  await prisma.clients.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};