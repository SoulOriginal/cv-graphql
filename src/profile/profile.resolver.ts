import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SkillCategory } from '@prisma/client';
import { Experience } from '../experience/experience.model';
import { ExperienceService } from '../experience/experience.service';
import { Project } from '../project/project.model';
import { ProjectService } from '../project/project.service';
import { Skill } from '../skill/skill.model';
import { SkillService } from '../skill/skill.service';
import { Link, Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillService: SkillService,
    private readonly experienceService: ExperienceService,
    private readonly projectService: ProjectService,
  ) {}

  @Query(() => Profile)
  profile(@Args('slug', { type: () => String, nullable: true }) slug?: string) {
    return this.profileService.getProfile(slug);
  }

  @Query(() => [Profile])
  profiles() {
    return this.profileService.getProfiles();
  }

  @ResolveField(() => [Link])
  async links(@Parent() profile: Profile) {
    const [links] = await this.profileService.getLinksByProfileIds([
      profile.id,
    ]);
    return links;
  }

  @ResolveField(() => [Skill])
  async skills(
    @Parent() profile: Profile,
    @Args('category', { type: () => SkillCategory, nullable: true })
    category?: SkillCategory,
  ) {
    const [skills] = await this.skillService.getByProfileIds([profile.id]);
    return category ? skills.filter((s) => s.category === category) : skills;
  }

  @ResolveField(() => [Experience])
  async experience(@Parent() profile: Profile) {
    const [items] = await this.experienceService.getByProfileIds([profile.id]);
    return items;
  }

  @ResolveField(() => [Project])
  async projects(@Parent() profile: Profile) {
    const [projects] = await this.projectService.getByProfileIds([profile.id]);
    return projects;
  }
}
