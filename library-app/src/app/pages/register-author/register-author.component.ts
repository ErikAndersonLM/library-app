import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-register-author',
  templateUrl: './register-author.component.html',
  styleUrls: ['./register-author.component.css']
})
export class RegisterAuthorComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private authorService: AuthorService
  ) { }

  formAuthor_Register!: FormGroup;

  ngOnInit(): void {
    this.formAuthor_Register = this._formBuilder.group({
      name: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      nationality: ['', [Validators.required]]
    })
  }

  async register(){
    const author = {
      name: this.formAuthor_Register.get("name")?.value,
      date_of_birth: this.formAuthor_Register.get("date_of_birth")?.value,
      nationality: this.formAuthor_Register.get("nationality")?.value
    } as Author;
    
    const response:any = await this.authorService.createAuthor(author);
    if(response.success){
      alert("Autor cadastrado com sucesso!");
    }
  
  }
}