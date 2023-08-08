import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formRegisterUser!: FormGroup;

  ngOnInit(): void {

    this.formRegisterUser = this.formBuilder.group({
      name: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
      confirmPassword:['', [Validators.required,Validators.minLength(8)]]
    });

  }

}
