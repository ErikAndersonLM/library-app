import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }
    
    formLogin!: FormGroup;

    
  ngOnInit(): void {

    this.formLogin = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

  }

  async login() {
    const user = {
      email: this.formLogin.get("email")?.value,
      password: this.formLogin.get("password")?.value
    } as User;

    const response:any = await this.userService.verifyUser(user);
    console.log(response);
    if(response.success){
      this.router.navigate(['/my-books'])
    } else {
      alert(response.message);
    }
  }


}
