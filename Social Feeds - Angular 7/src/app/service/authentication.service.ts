import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public validateLogin(username, password) {
    if(username == 'GT' && password == 'gaurav#123') {
      return true;
    }   
    return false;
  }

  public isUserLoggedIn() {
    if(!!sessionStorage.getItem('loginToken')) {
      return true;
    }
    return false;
  }
}
