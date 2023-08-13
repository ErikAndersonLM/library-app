import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterBookComponent } from './pages/register-book/register-book.component';
import { RegisterAuthorComponent } from './pages/register-author/register-author.component';
import { LoginComponent } from './pages/login/login.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';



const routes: Routes = [
  { path: 'login',
  loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule) },
  { path: '',
  loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'my-books',
  loadChildren: () => import('src/app/pages/my-books/my-books.module').then(m => m.MyBooksModule) },
  { path: 'register-author',
  loadChildren: () => import('src/app/pages/register-author/register-author.module').then(m => m.RegisterAuthorModule) },
  { path: 'register-user',
  loadChildren: () => import('src/app/pages/register-user/register-user.module').then(m => m.RegisterUserModule) },
  { path: 'register-book',
  loadChildren: () => import('src/app/pages/register-book/register-book.module').then(m => m.RegisterBookModule) },
  { path: '**',
  loadChildren: () => import('src/app/pages/not-found/not-found.module').then(m => m.NotFoundModule) },
];




@NgModule({
  declarations: [
    AppComponent,
    RegisterBookComponent,
    RegisterAuthorComponent,
    LoginComponent,
    MyBooksComponent,
    NotFoundComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }