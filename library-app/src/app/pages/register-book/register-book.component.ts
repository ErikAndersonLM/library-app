import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  formBook_Register!: FormGroup;

  ngOnInit(): void {

    this.formBook_Register = this._formBuilder.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      language: ['', [Validators.required]],
      release_year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      synopsis: ['', [Validators.required]],
      book_author: ['', [Validators.required]],
    })

  }

}
