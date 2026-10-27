import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SkillCategory } from '@prisma/client';

registerEnumType(SkillCategory, { name: 'SkillCategory' });

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => SkillCategory)
  category: SkillCategory;
}
