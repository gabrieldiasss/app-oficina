import { Field, InputType } from "type-graphql";

@InputType()
export class CreateClientInput {
  @Field(() => String)
  name!: string;
}
