import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { LoadersFactory } from './loaders/loaders.factory';
import { LoadersModule } from './loaders/loaders.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ProfileModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [LoadersModule],
      inject: [LoadersFactory],
      useFactory: (loaders: LoadersFactory) => ({
        autoSchemaFile: true,
        sortSchema: true,
        playground: false,
        introspection: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
        context: () => ({ loaders: loaders.create() }),
      }),
    }),
  ],
})
export class AppModule {}
