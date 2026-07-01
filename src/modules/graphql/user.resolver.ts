import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { UsersService } from '../users/users.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  async getUsers(
    @Args('page', { type: () => Int, nullable: true }) page?: number,
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
  ) {
    const result = await this.usersService.paginate({
      page: page ?? 1,
      limit: limit ?? 20,
    });
    return result.data;
  }

  @Query('user')
  async getUser(@Args('id') id: string) {
    try {
      return await this.usersService.findOne(id);
    } catch {
      throw new GraphQLError('User not found', {
        extensions: { code: 'NOT_FOUND' },
      });
    }
  }
}
