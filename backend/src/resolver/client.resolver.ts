import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateClientInput } from "../dtos/inputs/client.input.js";
import { ClienteModel } from "../models/client.model.js";
import { ClientService } from "../services/client.service.js";

@Resolver(() => ClienteModel)
export class ClientResolver {
  private clientService = new ClientService();

  @Query(() => [ClienteModel])
  async clients(): Promise<ClienteModel[]> {
    return this.clientService.findAll();
  }

  @Mutation(() => ClienteModel)
  async createClient(
    @Arg("data", () => CreateClientInput) data: CreateClientInput,
  ): Promise<ClienteModel> {
    return this.clientService.create(data);
  }
}
