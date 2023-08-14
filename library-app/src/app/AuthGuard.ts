import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    
    isLoggedIn:boolean = false;

    constructor(private userService: UserService, private router: Router) {}
    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      this.userService.isLoggedIn.subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;       
      });

      if (this.isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }

    }
  }