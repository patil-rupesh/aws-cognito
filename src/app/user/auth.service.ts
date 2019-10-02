import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  authIsLoading = new BehaviorSubject<boolean>(false);
  authDidFail = new BehaviorSubject<boolean>(false);
  authStatusChanged = new Subject<boolean>();

  constructor(private router: Router) {
  }

  signUp(username: string, email: string, password: string): void {
    return;
  }

  confirmUser(username: string, code: string) {
  }

  signIn(username: string, password: string): void {
    return;
  }

  getAuthenticatedUser() {
  }

  logout() {
  }

  // isAuthenticated(): Observable<boolean> {

  // }

  // getUserName(): Observable<CognitoUserPool> {

  // }

  initAuth() {
    // this.isAuthenticated().subscribe(
    //   (auth) => this.authStatusChanged.next(auth)
    // );
  }
}
