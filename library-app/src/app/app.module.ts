import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterBookComponent } from './pages/register-book/register-book.component';
import { RegisterAuthorComponent } from './pages/register-author/register-author.component';
import { LoginComponent } from './pages/login/login.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



const routes: Routes = [
  { path: 'login',
  loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'my-books',
  loadChildren: () => import('src/app/pages/my-books/my-books.module').then(m => m.MyBooksModule) },
  { path: 'register-author',
  loadChildren: () => import('src/app/pages/register-author/register-author.module').then(m => m.RegisterAuthorModule) },
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
