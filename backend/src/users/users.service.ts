import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { equal } from 'assert';

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
      {
        where: {
          username: username
        }
      }
    );
    return user;
  }

  async create(username: string, email: string, pass: string): Promise<Users> {
    const user = this.usersRepository.create({
      username: username,
      password: pass,
      email: email
    });

    return await this.usersRepository.save(user);

  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
