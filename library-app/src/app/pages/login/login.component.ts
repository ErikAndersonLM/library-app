import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private _formBuilder: FormBuilder
    ) { }
    
    formLogin!: FormGroup;

    
  ngOnInit(): void {

    this.formLogin = this._formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

}
