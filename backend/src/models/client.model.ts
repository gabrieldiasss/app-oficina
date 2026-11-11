import { Field, GraphQLISODateTime, ID, ObjectType } from "type-graphql";

@ObjectType()
export class ClienteModel {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;
}
