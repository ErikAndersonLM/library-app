import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, MaxLengthValidator } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService
  ) { }

  formBook_Register!: FormGroup;

  public list: Author[] = [];

  ngOnInit(): void {

    this.authorService.getAllAuthors().then(result => {
      this.list = result as Author[];
      console.log(this.list);
  }).catch(e => {
    console.error(e);
  }) 

    this.formBook_Register = this._formBuilder.group({
      title: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      language: ['', [Validators.required]],
      release_year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      synopsis: ['', [Validators.required]],
      book_author: ['', [Validators.required]],
    });
  }

  async register(){
    const book = {
      title: this.formBook_Register.get("title")?.value,
      gender: this.formBook_Register.get("gender")?.value,
      language: this.formBook_Register.get("language")?.value,
      release_year: this.formBook_Register.get("release_year")?.value,
      synopsis: this.formBook_Register.get("synopsis")?.value,
      author: this.formBook_Register.get("book_author")?.value
    } as Book;
    
    const response:any = await this.bookService.createBook(book);
    if(response.success){
      alert("Livro cadastrado com sucesso!");
    }
  
  }

}
