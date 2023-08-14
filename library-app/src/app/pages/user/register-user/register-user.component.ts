import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  formRegisterUser!: FormGroup;

  ngOnInit(): void {

    this.formRegisterUser = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]]
    });

  }

  async register(){
    const user = {
      name: this.formRegisterUser.get("name")?.value,
      email: this.formRegisterUser.get("email")?.value,
      password: this.formRegisterUser.get("password")?.value
    } as User;
    
    const response:any = await this.userService.createUser(user);
    if(response.success){
      alert("Usuário cadastrado com sucesso!");
      this.router.navigate(['/my-books'])
    }
  
  }

}
