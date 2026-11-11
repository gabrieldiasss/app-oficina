import type { CreateClientInput } from "../dtos/inputs/client.input.js";
import { prisma } from "../lib/prisma.js";

type ClientDTO = { id: string; name: string; createdAt: Date };

const toDTO = (c: { id: number; nome: string; createdAt: Date }): ClientDTO => ({
  id: String(c.id),
  name: c.nome,
  createdAt: c.createdAt,
});

export class ClientService {
  async create(data: CreateClientInput) {
    return toDTO(await prisma.cliente.create({ data: { nome: data.name } }));
  }

  async findAll() {
    return (await prisma.cliente.findMany({ orderBy: { id: "asc" } })).map(toDTO);
  }
}
