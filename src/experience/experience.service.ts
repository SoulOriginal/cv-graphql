import { Injectable } from '@nestjs/common';
import { Experience } from '@prisma/client';
import { groupBy } from '../common/group-by';
import { ExperienceRepository } from './experience.repository';

export type ExperienceView = Experience & { period: string };

const formatMonth = (date: Date) =>
  `${String(date.getUTCMonth() + 1).padStart(2, '0')}.${date.getUTCFullYear()}`;

export function formatPeriod(start: Date, end: Date | null) {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : 'по настоящее время'}`;
}

@Injectable()
export class ExperienceService {
  constructor(private readonly experience: ExperienceRepository) {}

  async getByProfileIds(
    profileIds: readonly number[],
  ): Promise<ExperienceView[][]> {
    const rows = await this.experience.findByProfileIds(profileIds);
    const views = rows.map((row) => ({
      ...row,
      period: formatPeriod(row.startDate, row.endDate),
    }));
    return groupBy(profileIds, views, (item) => item.profileId);
  }
}
