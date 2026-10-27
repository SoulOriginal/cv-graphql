import { Experience } from '@prisma/client';
import { ExperienceRepository } from './experience.repository';
import { ExperienceService, formatPeriod } from './experience.service';

const row = (id: number, profileId: number): Experience => ({
  id,
  profileId,
  company: `Company ${id}`,
  position: 'Developer',
  location: null,
  startDate: new Date('2022-03-01'),
  endDate: new Date('2022-09-01'),
  summary: null,
  achievements: [],
});

describe('ExperienceService', () => {
  it('formats period', () => {
    expect(formatPeriod(new Date('2017-06-01'), new Date('2019-02-01'))).toBe(
      '06.2017 - 02.2019',
    );
    expect(formatPeriod(new Date('2025-09-01'), null)).toBe(
      '09.2025 - по настоящее время',
    );
  });

  it('groups rows by profile id in the order of keys', async () => {
    const repository = {
      findByProfileIds: jest.fn().mockResolvedValue([row(1, 2), row(2, 1)]),
    } as unknown as ExperienceRepository;
    const service = new ExperienceService(repository);

    const result = await service.getByProfileIds([1, 2, 3]);

    expect(result.map((items) => items.map((i) => i.id))).toEqual([
      [2],
      [1],
      [],
    ]);
    expect(result[0][0].period).toBe('03.2022 - 09.2022');
  });
});
