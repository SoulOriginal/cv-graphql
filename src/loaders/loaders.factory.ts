import { Injectable } from '@nestjs/common';
import { Link, Project, Skill } from '@prisma/client';
import DataLoader from 'dataloader';
import {
  ExperienceService,
  ExperienceView,
} from '../experience/experience.service';
import { ProfileService } from '../profile/profile.service';
import { ProjectService } from '../project/project.service';
import { SkillService } from '../skill/skill.service';

export interface RequestLoaders {
  links: DataLoader<number, Link[]>;
  skills: DataLoader<number, Skill[]>;
  experience: DataLoader<number, ExperienceView[]>;
  projects: DataLoader<number, Project[]>;
}

@Injectable()
export class LoadersFactory {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillService: SkillService,
    private readonly experienceService: ExperienceService,
    private readonly projectService: ProjectService,
  ) {}

  create(): RequestLoaders {
    return {
      links: new DataLoader((ids) =>
        this.profileService.getLinksByProfileIds(ids),
      ),
      skills: new DataLoader((ids) => this.skillService.getByProfileIds(ids)),
      experience: new DataLoader((ids) =>
        this.experienceService.getByProfileIds(ids),
      ),
      projects: new DataLoader((ids) =>
        this.projectService.getByProfileIds(ids),
      ),
    };
  }
}
