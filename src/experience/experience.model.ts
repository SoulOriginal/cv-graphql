import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => Int)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field(() => String, { nullable: true })
  location: string | null;

  @Field()
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date | null;

  @Field({ description: 'MM.YYYY - MM.YYYY' })
  period: string;

  @Field(() => String, { nullable: true })
  summary: string | null;

  @Field(() => [String])
  achievements: string[];
}
