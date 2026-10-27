import { Injectable } from '@nestjs/common';
import { Project } from '@prisma/client';
import { groupBy } from '../common/group-by';
import { ProjectRepository } from './project.repository';

@Injectable()
export class ProjectService {
  constructor(private readonly projects: ProjectRepository) {}

  async getByProfileIds(profileIds: readonly number[]): Promise<Project[][]> {
    const projects = await this.projects.findByProfileIds(profileIds);
    return groupBy(profileIds, projects, (project) => project.profileId);
  }
}
