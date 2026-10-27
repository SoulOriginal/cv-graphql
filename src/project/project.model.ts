import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  url: string | null;

  @Field(() => String, { nullable: true })
  role: string | null;

  @Field(() => Int, { nullable: true })
  year: number | null;

  @Field(() => String, { nullable: true })
  description: string | null;
}
