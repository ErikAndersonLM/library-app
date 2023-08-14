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
    private formBuilder: FormBuilder,
    private authorService: AuthorService
  ) { }

  formAuthorRegister!: FormGroup;

  ngOnInit(): void {
    this.formAuthorRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      nationality: ['', [Validators.required]]
    })
  }

  async register(){
    const author = {
      name: this.formAuthorRegister.get("name")?.value,
      dateOfBirth: this.formAuthorRegister.get("dateOfBirth")?.value,
      nationality: this.formAuthorRegister.get("nationality")?.value
    } as Author;
    
    const response:any = await this.authorService.createAuthor(author);
    if(response.success){
      alert("Autor cadastrado com sucesso!");
    }
  
  }
}