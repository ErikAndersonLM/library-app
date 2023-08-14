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
import { Response} from 'express';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User, @Res() response: Response) {
    return response.status(HttpStatus.OK).send(this.userService.create(user));
  }

  @Post('authenticate')
  async verifyLogin(@Body() user: User, @Res() response:Response){
    const result = await this.userService.verifyLogin(user);
    return response.status(HttpStatus.OK).send(result);
  }


  @Get()
  findAll() {
    return this.userService.findAll();
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
