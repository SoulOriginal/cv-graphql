import { ExperienceService } from '../experience/experience.service';
import { ProfileService } from '../profile/profile.service';
import { ProjectService } from '../project/project.service';
import { SkillService } from '../skill/skill.service';
import { LoadersFactory } from './loaders.factory';

describe('LoadersFactory', () => {
  const skillService = {
    getByProfileIds: jest.fn((ids: readonly number[]) =>
      Promise.resolve(ids.map(() => [])),
    ),
  };

  const factory = new LoadersFactory(
    {} as ProfileService,
    skillService as unknown as SkillService,
    {} as ExperienceService,
    {} as ProjectService,
  );

  beforeEach(() => skillService.getByProfileIds.mockClear());

  it('batches loads from the same request into one call', async () => {
    const { skills } = factory.create();

    await Promise.all([skills.load(1), skills.load(2), skills.load(1)]);

    expect(skillService.getByProfileIds).toHaveBeenCalledTimes(1);
    expect(skillService.getByProfileIds).toHaveBeenCalledWith([1, 2]);
  });

  it('does not share cache between requests', async () => {
    await factory.create().skills.load(1);
    await factory.create().skills.load(1);

    expect(skillService.getByProfileIds).toHaveBeenCalledTimes(2);
  });
});
