import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { Book } from 'src/book/entities/book.entity';

@Injectable()

export class BookService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  create(book: Book) {
    book.id = uuidv4();
    this.cacheManager.set("book-".concat(book.id), book);
    return { success: true, message: "Livro criado com sucesso" };
  }

  async findAll() {
    const allKeys: string[] = await this.cacheManager.store.keys() as string[];
    const booksKeys = await allKeys.filter(item => item.includes("book-"));
    const booksInformations = await Promise.all(booksKeys.map(key => this.cacheManager.get(key)));
    return booksInformations;
  }

  /** READED FLOW */

  async registerReadedBook(book: Book) {
    let books: Book[] = [];
    const resultCache = await this.cacheManager.get(book.userEmail.concat('-readed-books'));
    if (resultCache) {
      books = resultCache as Book[];
    }
    books.push(book);
    this.cacheManager.set(book.userEmail.concat('-readed-books'), books);
  }

  async removeReadedBook(book: Book) {
    let books = await this.cacheManager.get(book.userEmail.concat('-readed-books')) as Book[];
    if (books) {
      const booksFiltered = books.filter(item => item.id !== book.id);
      this.cacheManager.set(book.userEmail.concat('-readed-books'), booksFiltered);
    }
  }

  getReadedBooksByUser(emailUser: string) {
    const getAllBooks = this.cacheManager.get(emailUser.concat('-readed-books'));
    return getAllBooks ? getAllBooks : [];
  }

  /** SAVED FLOW */

  async registerSavedBook(book: Book) {
    let books: Book[] = [];
    const resultCache = await this.cacheManager.get(book.userEmail.concat('-saved-books'));
    if (resultCache) {
      books = resultCache as Book[];
    }
    books.push(book);
    this.cacheManager.set(book.userEmail.concat('-saved-books'), books);
  }

  async removeSavedBook(book: Book) {
    let books = await this.cacheManager.get(book.userEmail.concat('-saved-books')) as Book[];
    if (books) {
      const booksFiltered = books.filter(item => item.id !== book.id);
      this.cacheManager.set(book.userEmail.concat('-saved-books'), booksFiltered);
    }
  }

  getSavedBooksByUser(emailUser:string ) {
    const getAllBooks = this.cacheManager.get(emailUser.concat('-saved-books'));
    return getAllBooks ? getAllBooks : [];
  }
}
