import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  name: String;
  appComponent: AppComponent;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.getUserName();
  }

  getUserName(): void {
    this.name = this.authService.getAuthenticatedUser().getUsername();
    console.log("User-details");
  }
}
