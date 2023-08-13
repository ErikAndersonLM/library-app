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
    console.log(book);
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

}
