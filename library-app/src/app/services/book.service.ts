/** GENERAL */
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/** SERVICES */
import { UtilService } from './util.service';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) {
  }

  createBook(book: Book) {
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book';
      this.http.post(
        query,
        book
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dataBook => {
          resolve(dataBook);
        }, err => {
          reject(err);
        });
    });
  }

  getAllBooks() {
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book';
      this.http.get(
        query
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(books => {
          resolve(books);
        }, err => {
          reject(err);
        });
    });
  }

  registerSavedBook(book: Book){
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book/saved';
      this.http.post(
        query,
        book
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dataBook => {
          resolve(dataBook);
        }, err => {
          reject(err);
        });
    });
  }

  removeSavedBook(book: Book){
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book/saved/remove';
      this.http.post(
        query,
        book
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dataBook => {
          resolve(dataBook);
        }, err => {
          reject(err);
        });
    });
  }

  getSavedBooks(userEmail: string) {
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book/saved/' + userEmail;
      this.http.get(
        query
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(books => {
          resolve(books);
        }, err => {
          reject(err);
        });
    });
  }

  registerReadedBook(book: Book){
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book/readed';
      this.http.post(
        query,
        book
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dataBook => {
          resolve(dataBook);
        }, err => {
          reject(err);
        });
    });
  }

  removeReadedBook(book: Book){
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book/readed/remove';
      this.http.post(
        query,
        book
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dataBook => {
          resolve(dataBook);
        }, err => {
          reject(err);
        });
    });
  }

  getReadedBooks(userEmail: string) {
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/book/readed/' + userEmail;
      this.http.get(
        query
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(books => {
          resolve(books);
        }, err => {
          reject(err);
        });
    });
  }

}
