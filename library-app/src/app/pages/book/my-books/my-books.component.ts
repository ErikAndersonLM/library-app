import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Book } from 'src/app/model/book';
import { UserService } from 'src/app/services/user.service';
import * as loadsh from 'lodash';
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  selectedBook: any;

  constructor(private bookService: BookService,
    private userService: UserService) { }

  public list: Book[] = [];
  public readedFilteredList: Book[] = [];
  public savedFilteredList: Book[] = [];

  async ngOnInit() {
    this.bookService.getAllBooks().then(result => {
      this.list = result as Book[];
    }).catch(e => {
      console.error(e);
    });

    await this.getBooksSaved();
    await this.getBooksReaded();
    await this.checkSavedAndReadedBooks();
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
    book.userEmail = this.userService.emailUserLogin;
    if (checked) {
      await this.bookService.registerSavedBook(book);
    } else {
      await this.bookService.removeSavedBook(book);
    }
    await this.getBooksSaved();
  }

  async getBooksSaved() {
    const savedBooks = await this.bookService.getSavedBooks(this.userService.emailUserLogin);
    this.savedFilteredList = savedBooks as Book[];
  }

  async bookReaded(book: Book, event: any) {
    const checked: boolean = event.srcElement.checked;
    book.userEmail = this.userService.emailUserLogin;
    if (checked) {
      await this.bookService.registerReadedBook(book);
    } else {
      await this.bookService.removeReadedBook(book);
    }
    await this.getBooksReaded();
  }

  async getBooksReaded() {
    const readedBooks = await this.bookService.getReadedBooks(this.userService.emailUserLogin);
    this.readedFilteredList = readedBooks as Book[];
  }

  checkSavedAndReadedBooks() {

    this.list.forEach(book => {
      if (this.savedFilteredList) {
        this.savedFilteredList.some(bookSaved => book.id === bookSaved.id) ? book.saveChecked = true : book.saveChecked = false;
      }
      if (this.readedFilteredList) {
        this.readedFilteredList.some(bookReaded => book.id === bookReaded.id) ? book.readChecked = true : book.readChecked = false;
      }
    })
  }

}