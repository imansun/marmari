import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends CrudService<User> {
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
  ) {
    super(repository);
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.repository.findOne({
      where: { username },
      select: {
        id: true,
        username: true,
        password: true,
        email: true,
        roles: true,
        status: true,
        isActive: true,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({ where: { email } });
  }

  async createUser(dto: Partial<User>): Promise<User> {
    const user = this.repository.create(dto);
    return this.repository.save(user);
  }
}
