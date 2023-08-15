import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  selectedBook: any;

  constructor(private bookService: BookService) { }

  public list: Book[] = [];
  public readedFilteredList: Book[] = [];
  public savedFilteredList: Book[] = [];

  ngOnInit(): void {

    this.bookService.getAllBooks().then(result => {
      this.list = result as Book[];
    }).catch(e => {
      console.error(e);
    });

    this.getBooksSaved();
    this.getBooksReaded();
  }

  showModal(book: any) {
    this.selectedBook = book;
    const modal = document.querySelector("dialog");
    if (modal) {
      modal.showModal();
    }
  }

  closeModal() {
    this.selectedBook = null;
    const modal = document.querySelector("dialog");
    if (modal) {
      modal.close()
    }
  }

  async bookSaved(book: Book, event: any) {
    const checked: boolean = event.srcElement.checked;
    if (checked) {
      await this.bookService.registerSavedBook(book);
    } else {
      await this.bookService.removeSavedBook(book);
    }
    await this.getBooksSaved();
  }

  async getBooksSaved() {
    const savedBooks = await this.bookService.getSavedBooks();
    this.savedFilteredList = savedBooks as Book[];
  }

  async bookReaded(book: Book, event: any) {
    const checked: boolean = event.srcElement.checked;
    if (checked) {
      await this.bookService.registerReadedBook(book);
    } else {
      await this.bookService.removeReadedBook(book);
    }
    await this.getBooksReaded();
  }

  async getBooksReaded() {
    const readedBooks = await this.bookService.getReadedBooks();
    this.readedFilteredList = readedBooks as Book[];
  }

  

}