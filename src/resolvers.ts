import {Role} from './generated/graphql';
import {QueryResolvers, Resolvers, ResolversTypes} from './generated/graphql';

export const query: QueryResolvers = {
  me(
    parent: ResolversTypes["Query"],
    args: {},
    context: any,
  ) {
    return Promise.resolve({
      id: '0',
      username: 'hogee',
      email: 'hogeho@hoge.com',
      role: Role.Admin
    })
  },

  user(
    parent: ResolversTypes["Query"],
    args: {id: string},
    context: any,
  ) {
    console.log(args);
    return {
      id: '32',
      username: 'hogee',
      email: 'hogeho@hoge.com',
      role: Role.Admin
    }
  }

};

export const resolvers: Resolvers = {
  Query: query
}
