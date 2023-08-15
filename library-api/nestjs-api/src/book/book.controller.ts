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
    return response.status(HttpStatus.OK).send(this.bookService.create(book));
  }

  @Post('saved')
  savedBook(@Body() book: Book, @Res() response: Response) {
    return response.status(HttpStatus.OK).send(this.bookService.savedBook(book));
  }

  @Post('saved/remove')
  async removeSavedBook(@Body() book: Book, @Res() response: Response) {
    await this.bookService.removeSavedBook(book);
    return response.status(HttpStatus.OK).send({success: 'OK!'});
  }

  @Get('saved')
  findSavedBooks(){
    return this.bookService.getSavedBooks();
  }

  @Post('readed')
  readedBook(@Body() book: Book, @Res() response: Response) {
    return response.status(HttpStatus.OK).send(this.bookService.registerReadedBook(book));
  }

  @Post('readed/remove')
  async removeReadedBook(@Body() book: Book, @Res() response: Response) {
    await this.bookService.removeReadedBook(book);
    return response.status(HttpStatus.OK).send({success: 'OK!'});
  }

  @Get('readed')
  findReadedBooks(){
    return this.bookService.getReadedBooks();
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
