import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  Delete,
  HttpStatus
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/book/entities/book.entity';
import { Response } from 'express';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() book: Book, @Res() response: Response) {
    console.log("Livro chegou aqui -> ", book);
    return response.status(HttpStatus.OK).send(this.bookService.create(book));
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.bookService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
