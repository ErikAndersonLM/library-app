/** GENERAL */
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.isLoggedInSubject.asObservable();
  emailUserLogin: string = "";

  createUser(user: User) {
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

  verifyUser(user: User){
    return new Promise((resolve, reject) => {
      const query = UtilService.API_BASE_URL + '/user/authenticate';
      this.http.post(
        query,
        user
      )
        .pipe(
          map((res: any) => {
            return res;
          })
        ).subscribe(dataUser => {
          this.isLoggedInSubject.next(dataUser.success);
          this.emailUserLogin = dataUser.emailUser;
          resolve(dataUser);
        }, err => {
          reject(err);
        });
    });
  }

  logout(){
    this.isLoggedInSubject.next(false);
    window.location.replace('/login');
  }

}
