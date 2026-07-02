import { Resolver, Query, Args, Int, ObjectType, Field } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { UsersService } from '../users/users.service';

@ObjectType()
class GraphQLUser {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  isActive: boolean;

  @Field()
  status: string;

  @Field(() => [String])
  roles: string[];

  @Field({ nullable: true })
  lastLoginAt?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@Resolver()
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [GraphQLUser])
  async users(
    @Args('page', { type: () => Int, nullable: true }) page?: number,
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
  ) {
    const result = await this.usersService.paginate({
      page: page ?? 1,
      limit: limit ?? 20,
    });
    return result.data;
  }

  @Query(() => GraphQLUser)
  async user(@Args('id') id: string) {
    try {
      return await this.usersService.findOne(id);
    } catch {
      throw new GraphQLError('User not found', {
        extensions: { code: 'NOT_FOUND' },
      });
    }
  }
}
