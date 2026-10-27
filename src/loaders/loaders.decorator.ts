import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RequestLoaders } from './loaders.factory';

export const Loaders = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): RequestLoaders =>
    GqlExecutionContext.create(ctx).getContext<{ loaders: RequestLoaders }>()
      .loaders,
);
