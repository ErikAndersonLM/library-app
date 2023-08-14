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

  ngOnInit(): void {
    this.bookService.getAllBooks().then(result => {
        this.list = result as Book[];
        console.log(this.list);
    }).catch(e => {
      console.error(e);
    }) 
  }

}