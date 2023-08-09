import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-author',
  templateUrl: './register-author.component.html',
  styleUrls: ['./register-author.component.css']
})
export class RegisterAuthorComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  formAuthor_Register!: FormGroup;

  ngOnInit(): void {
    this.formAuthor_Register = this._formBuilder.group({
      name: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      nationality: ['', [Validators.required]]
    })
  }

}
