import { mergeResolvers } from 'merge-graphql-schemas'
import { GraphQLFieldResolver } from 'graphql'

import userResolver from './user'

export type Resolver = {
  Query: {
    [key: string]: GraphQLFieldResolver<any, any>
  }
  Mutation?: {
    [key: string]: GraphQLFieldResolver<any, any>
  }
  [key: string]: {
    [key: string]: GraphQLFieldResolver<any, any>
  }
}

export default <Resolver>mergeResolvers([
  userResolver,
])
