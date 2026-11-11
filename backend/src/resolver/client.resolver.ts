import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateClientInput } from "../dtos/inputs/client.input.js";
import { ClienteModel } from "../models/client.model.js";
import { ClientService } from "../services/client.service.js";

@Resolver(() => ClienteModel)
export class ClientResolver {
  private clientService = new ClientService();

  // O GraphQL exige ao menos uma Query no schema.
  @Query(() => String)
  health(): string {
    return "ok";
  }

  @Mutation(() => ClienteModel)
  async createClient(
    @Arg("data", () => CreateClientInput) data: CreateClientInput,
  ): Promise<ClienteModel> {
    return this.clientService.create(data);
  }
}
