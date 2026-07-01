import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../modules/users/entities/user.entity';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    const count = await this.userRepository.count();
    if (count > 0) return;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('admin123', salt);

    await this.userRepository.save([
      {
        username: 'superadmin',
        email: 'superadmin@marmari.local',
        password: hash,
        role: 'super_admin',
        isActive: true,
      },
      {
        username: 'admin',
        email: 'admin@marmari.local',
        password: hash,
        role: 'admin',
        isActive: true,
      },
      {
        username: 'manager',
        email: 'manager@marmari.local',
        password: hash,
        role: 'manager',
        isActive: true,
      },
      {
        username: 'user',
        email: 'user@marmari.local',
        password: hash,
        role: 'user',
        isActive: true,
      },
    ]);
    console.log('✅ Seed: 4 default users created (password: admin123)');
  }
}
