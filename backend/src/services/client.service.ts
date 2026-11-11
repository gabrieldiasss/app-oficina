import type { CreateClientInput } from "../dtos/inputs/client.input.js";
import { prisma } from "../lib/prisma.js";

export class ClientService {
  async create(data: CreateClientInput) {
    return prisma.cliente.create({ data: { name: data.name } });
  }
}
