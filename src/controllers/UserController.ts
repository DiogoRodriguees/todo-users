import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ResponseDTO } from 'src/classes/dtos/ResponseDTO';
import { UserDTO } from 'src/classes/dtos/UserDTO';
import { Public } from 'src/configs/PublicKey';
import { AuthGuard } from 'src/guards/AuthGuard';
import { UserService } from 'src/services/UserService';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public()
  async create(@Body() user: UserDTO) {
    const userResponse = await this.userService.create(user);
    return new ResponseDTO(HttpStatus.OK, 'Create user', userResponse);
  }

  @Get()
  async find(@Param('id') id: string) {
    const user = await this.userService.find(id);
    return new ResponseDTO(HttpStatus.OK, 'Get user complete', user);
  }

  @Put()
  async update(@Req() request: any) {
    await this.userService.update(request.user.id);
    return new ResponseDTO(HttpStatus.OK, 'Update user', {});
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async delete(@Param() id: string) {
    await this.userService.delete(id);
    return new ResponseDTO(HttpStatus.OK, 'User deleted', {});
  }
}
