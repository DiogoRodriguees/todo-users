import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/classes/dtos/UserDTO';
import { UserService } from 'src/services/UserService';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() user: UserDTO) {
    return await this.userService.create(user);
  }
}
