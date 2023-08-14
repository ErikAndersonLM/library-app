import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
  Res,
  HttpStatus
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './entities/author.entity';
import { Response } from 'express';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() author: Author, @Res() response: Response) {
    return response.status(HttpStatus.OK).send(this.authorService.create(author));
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.authorService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}