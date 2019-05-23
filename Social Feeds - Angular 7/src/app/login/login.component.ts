import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'your username';
  password: string = '';
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  doLogin() {
  
    if(this.authenticationService.validateLogin(this.username, this.password)) {
      this.router.navigate(['feeds']);
      sessionStorage.setItem('loginToken', this.username)  
    }
  }

}
