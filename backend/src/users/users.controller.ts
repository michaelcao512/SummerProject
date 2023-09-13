import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Post()
  create(@Body() body) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
