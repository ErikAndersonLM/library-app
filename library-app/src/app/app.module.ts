import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterBookComponent } from './pages/book/register-book/register-book.component';
import { RegisterAuthorComponent } from './pages/author/register-author/register-author.component';
import { LoginComponent } from './pages/user/login/login.component';
import { MyBooksComponent } from './pages/book/my-books/my-books.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterUserComponent } from './pages/user/register-user/register-user.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthGuard } from '../app/AuthGuard';

const routes: Routes = [
  { path: 'login',
  loadChildren: () => import('src/app/pages/user/login/login.module').then(m => m.LoginModule) },
  { path: '',
  loadChildren: () => import('src/app/pages/user/login/login.module').then(m => m.LoginModule) },
  { path: 'my-books',
  loadChildren: () => import('src/app/pages/book/my-books/my-books.module').then(m => m.MyBooksModule),
  canActivate: [AuthGuard] },
  { path: 'register-author',
  loadChildren: () => import('src/app/pages/author/register-author/register-author.module').then(m => m.RegisterAuthorModule),
  canActivate: [AuthGuard] },
  { path: 'register-user',
  loadChildren: () => import('src/app/pages/user/register-user/register-user.module').then(m => m.RegisterUserModule)},
  { path: 'register-book',
  loadChildren: () => import('src/app/pages/book/register-book/register-book.module').then(m => m.RegisterBookModule),
  canActivate: [AuthGuard] },
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
    RegisterUserComponent,
    NavbarComponent
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