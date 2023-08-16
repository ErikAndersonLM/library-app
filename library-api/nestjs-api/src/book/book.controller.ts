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


  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  /** SAVED FLOW */
  @Post('saved')
  savedBook(@Body() book: Book, @Res() response: Response) {
    return response.status(HttpStatus.OK).send(this.bookService.registerSavedBook(book));
  }

  @Post('saved/remove')
  async removeSavedBook(@Body() book: Book, @Res() response: Response) {
    await this.bookService.removeSavedBook(book);
    return response.status(HttpStatus.OK).send({success: 'OK!'});
  }

  @Get('saved/:userEmail')
  findSavedBooksByUser(@Param('userEmail') userEmail: string){
    return this.bookService.getSavedBooksByUser(userEmail);
  }

  /** READED FLOW */
  @Post('readed')
  readedBook(@Body() book: Book, @Res() response: Response) {
    return response.status(HttpStatus.OK).send(this.bookService.registerReadedBook(book));
  }

  @Post('readed/remove')
  async removeReadedBook(@Body() book: Book, @Res() response: Response) {
    await this.bookService.removeReadedBook(book);
    return response.status(HttpStatus.OK).send({success: 'OK!'});
  }

  @Get('readed/:userEmail')
  findReadedBooksByUser(@Param('userEmail') userEmail: string){
    return this.bookService.getReadedBooksByUser(userEmail);
  }
}
