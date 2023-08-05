import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterAuthorComponent } from './register-author.component';

const routes = [
  {
    path: '',
    component: RegisterAuthorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RegisterAuthorModule { }