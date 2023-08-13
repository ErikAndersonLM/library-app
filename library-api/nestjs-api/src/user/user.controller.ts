import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Res,
  HttpStatus,
  Delete,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Response } from 'express';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User, @Res() response: Response) {
    console.log("Usuário chegou aqui -> ", user);
    return response.status(HttpStatus.OK).send(this.userService.create(user));
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.userService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
