import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  findBySlug(slug: string) {
    return this.prisma.profile.findUnique({ where: { slug } });
  }

  findFirst() {
    return this.prisma.profile.findFirst({ orderBy: { id: 'asc' } });
  }

  findAll() {
    return this.prisma.profile.findMany({ orderBy: { id: 'asc' } });
  }

  findLinksByProfileIds(profileIds: readonly number[]) {
    return this.prisma.link.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
