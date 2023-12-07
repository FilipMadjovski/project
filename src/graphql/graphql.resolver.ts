/* eslint-disable prettier/prettier */
// graphql.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class GraphqlResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello, World!';
  }
}
