/** GENERAL */
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/** SERVICES */
import { UtilService } from './util.service';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) {
  }

  createAuthor(author: Author) {

    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/author';
      this.http.post(
        query,
        author
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dadosAuthor => {
          resolve(dadosAuthor);
        }, err => {
          reject(err);
        });
    });
  }

  getAllAuthors() {
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/author';
      this.http.get(
        query
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(author => {
          resolve(author);
        }, err => {
          reject(err);
        });
    });
  }

}
