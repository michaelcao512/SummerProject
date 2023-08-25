import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>) { }

  async findAll(): Promise<User[]> {
    const allUsers = await this.usersRepository.find();
    return allUsers
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({
      id: id
    });
    return user
  }

  async create(user: User): Promise<User> {
    const newUser = await this.usersRepository.save(user);
    return newUser
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
