import { Module } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';

@Module({
  providers: [ProfileRepository, ProfileService, ProfileResolver],
  exports: [ProfileService],
})
export class ProfileModule {}
