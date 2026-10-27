import { PrismaClient } from '@prisma/client';
import { experience, links, profile, projects, skills } from './seed-data';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    const { id: profileId } = await tx.profile.upsert({
      where: { slug: profile.slug },
      update: profile,
      create: profile,
    });

    await tx.link.deleteMany({ where: { profileId } });
    await tx.skill.deleteMany({ where: { profileId } });
    await tx.experience.deleteMany({ where: { profileId } });
    await tx.project.deleteMany({ where: { profileId } });

    await tx.link.createMany({
      data: links.map((link, i) => ({ ...link, profileId, sortOrder: i })),
    });
    await tx.skill.createMany({
      data: skills.map((skill, i) => ({ ...skill, profileId, sortOrder: i })),
    });
    await tx.experience.createMany({
      data: experience.map((item) => ({
        ...item,
        profileId,
        startDate: new Date(item.startDate),
        endDate: item.endDate ? new Date(item.endDate) : null,
      })),
    });
    await tx.project.createMany({
      data: projects.map((project, i) => ({
        ...project,
        profileId,
        sortOrder: i,
      })),
    });
  });

  console.log(`seeded profile ${profile.slug}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
