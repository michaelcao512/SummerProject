import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>) { }

  async findAll(): Promise<Users[]> {
    const allUsers = await this.usersRepository.find();
    return allUsers
  }

  async findOne(username: string): Promise<Users> {
    const user = await this.usersRepository.findOne(
      { where: { username: username },
     }
    )
    return user
  }

  async create(user: Users): Promise<Users> {
    const newUser = await this.usersRepository.save(user);
    return newUser
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
