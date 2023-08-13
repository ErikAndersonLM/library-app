/** GENERAL */
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/** SERVICES */
import { UtilService } from './util.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  createUser(user: User) {
    console.log(user);
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/user';
      this.http.post(
        query,
        user
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dataUser => {
          resolve(dataUser);
        }, err => {
          reject(err);
        });
    });
  }

}
