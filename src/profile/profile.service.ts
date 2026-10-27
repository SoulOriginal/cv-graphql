import { Injectable, NotFoundException } from '@nestjs/common';
import { Link } from '@prisma/client';
import { groupBy } from '../common/group-by';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(private readonly profiles: ProfileRepository) {}

  async getProfile(slug?: string) {
    const profile = slug
      ? await this.profiles.findBySlug(slug)
      : await this.profiles.findFirst();
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  getProfiles() {
    return this.profiles.findAll();
  }

  async getLinksByProfileIds(profileIds: readonly number[]): Promise<Link[][]> {
    const links = await this.profiles.findLinksByProfileIds(profileIds);
    return groupBy(profileIds, links, (link) => link.profileId);
  }
}
