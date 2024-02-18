import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ResponseDTO } from 'src/classes/dtos/ResponseDTO';
import { UserDTO } from 'src/classes/dtos/UserDTO';
import { UserService } from 'src/services/UserService';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() user: UserDTO) {
    const userResponse = await this.userService.create(user);
    return new ResponseDTO(HttpStatus.OK, 'Create user', userResponse);
  }
}
