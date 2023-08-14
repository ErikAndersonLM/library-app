import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn:boolean = false;
  
  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.userService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;       
    });
  }


  logout() {
    this.userService.logout();
  }

}
