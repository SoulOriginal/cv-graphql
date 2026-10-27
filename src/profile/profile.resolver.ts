import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SkillCategory } from '@prisma/client';
import { Experience } from '../experience/experience.model';
import { Loaders } from '../loaders/loaders.decorator';
import type { RequestLoaders } from '../loaders/loaders.factory';
import { Project } from '../project/project.model';
import { Skill } from '../skill/skill.model';
import { Link, Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  profile(@Args('slug', { type: () => String, nullable: true }) slug?: string) {
    return this.profileService.getProfile(slug);
  }

  @Query(() => [Profile])
  profiles() {
    return this.profileService.getProfiles();
  }

  @ResolveField(() => [Link])
  links(@Parent() profile: Profile, @Loaders() loaders: RequestLoaders) {
    return loaders.links.load(profile.id);
  }

  @ResolveField(() => [Skill])
  async skills(
    @Parent() profile: Profile,
    @Loaders() loaders: RequestLoaders,
    @Args('category', { type: () => SkillCategory, nullable: true })
    category?: SkillCategory,
  ) {
    const skills = await loaders.skills.load(profile.id);
    return category ? skills.filter((s) => s.category === category) : skills;
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: Profile, @Loaders() loaders: RequestLoaders) {
    return loaders.experience.load(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile, @Loaders() loaders: RequestLoaders) {
    return loaders.projects.load(profile.id);
  }
}
