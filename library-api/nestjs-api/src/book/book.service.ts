import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { Book } from 'src/book/entities/book.entity';
import * as deepEqual from 'deep-equal';

@Injectable()

export class BookService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  create(book: Book) {
    this.cacheManager.set("book-".concat(uuidv4()), book);
    return { success: true, message: "Livro criado com sucesso" };
  }

  async findAll() {
    const allKeys: string[] = await this.cacheManager.store.keys() as string[];
    const booksKeys = await allKeys.filter(item => item.includes("book-"));
    const booksInformations = await Promise.all(booksKeys.map(key => this.cacheManager.get(key)));
    return booksInformations;
  }

  async savedBook(book: Book) {
    let books: Book[] = [];
    const resultCache = await this.cacheManager.get('saved-books');
    if (resultCache) {
      books = resultCache as Book[];
    }
    books.push(book);
    this.cacheManager.set('saved-books', books);
  }

  async removeSavedBook(book: Book) {
    let books = await this.cacheManager.get('saved-books') as Book[];
    if (books) {
      const booksFiltered = books.filter(item => !deepEqual(book, item));
      this.cacheManager.set('saved-books', booksFiltered);
    }

  }

  getSavedBooks() {
    const getAllBooks = this.cacheManager.get('saved-books');
    return getAllBooks ? getAllBooks : [];
  }

  async registerReadedBook(book: Book) {
    let books: Book[] = [];
    const resultCache = await this.cacheManager.get('readed-books');
    if (resultCache) {
      books = resultCache as Book[];
    }
    books.push(book);
    this.cacheManager.set('readed-books', books);
  }

  async removeReadedBook(book: Book) {
    let books = await this.cacheManager.get('readed-books') as Book[];
    if (books) {
      const booksFiltered = books.filter(item => !deepEqual(book, item));
      this.cacheManager.set('readed-books', booksFiltered);
    }
  }

  getReadedBooks() {
    const getAllBooks = this.cacheManager.get('readed-books');
    return getAllBooks ? getAllBooks : [];
  }

  findOne(id: string) {
    const resultCache = this.cacheManager.get(id);
    if (resultCache) {
      return resultCache;
    }
    return `This book key not exist on Redis.`;
  }

  update(id: number) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
