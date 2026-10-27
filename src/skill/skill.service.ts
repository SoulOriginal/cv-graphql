import { Injectable } from '@nestjs/common';
import { Skill } from '@prisma/client';
import { groupBy } from '../common/group-by';
import { SkillRepository } from './skill.repository';

@Injectable()
export class SkillService {
  constructor(private readonly skills: SkillRepository) {}

  async getByProfileIds(profileIds: readonly number[]): Promise<Skill[][]> {
    const skills = await this.skills.findByProfileIds(profileIds);
    return groupBy(profileIds, skills, (skill) => skill.profileId);
  }
}
