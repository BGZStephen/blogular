import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
    let loginContainer = document.getElementsByClassName("login-container")[0]
    loginContainer.classList.toggle("login-visible")
  }

  toggleRegister() {
    let registerContainer = document.getElementsByClassName("register-container")[0]
    registerContainer.classList.toggle("register-visible")
  }

}
