import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  constructor(private bookService: BookService) { }
  
  public list: Book[] = [];
  public readedFilteredList:Book[] = [];
  public savedFilteredList: Book[] = [];

  ngOnInit(): void {
    this.bookService.getAllBooks().then(result => {
        this.list = result as Book[];
        console.log(this.list);
    }).catch(e => {
      console.error(e);
    }) 
  }

  bookSaved(book: Book, event:any){
    const checked: boolean = event.srcElement.checked;
    console.log(checked);
    if(checked) {
      this.savedFilteredList.push(book);
    } else {
      this.savedFilteredList = this.savedFilteredList.filter(item => item !== book);
    }
  }

  bookReaded(book: Book, event:any){
    const checked: boolean = event.srcElement.checked;
    console.log(checked);
    if(checked) {
      this.readedFilteredList.push(book);
    } else {
      this.readedFilteredList = this.readedFilteredList.filter(item => item !== book);
    }
  }

}