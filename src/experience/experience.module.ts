import { Module } from '@nestjs/common';
import { ExperienceRepository } from './experience.repository';
import { ExperienceService } from './experience.service';

@Module({
  providers: [ExperienceRepository, ExperienceService],
  exports: [ExperienceService],
})
export class ExperienceModule {}
