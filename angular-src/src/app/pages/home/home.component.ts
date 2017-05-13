import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UsersApiService } from "../../services/users-api.service"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // Structural / style functions

  toggleLogin() {
    let loginContainer = document.getElementsByClassName("login-container")[0]
    loginContainer.classList.toggle("login-visible")
  }

  toggleRegister() {
    let registerContainer = document.getElementsByClassName("register-container")[0]
    registerContainer.classList.toggle("register-visible")
  }

  // Validation / Registration functions

  login(userObject) {
    this.usersApiService.authenticate(userObject)
    .subscribe(res => {
      if(res.success) {
        this.usersApiService.storeToken(res)
        this.router.navigate(['/dashboard'])
      } else {
        this.flashMessage.show(res.message, {cssClass: "flash-failure", timeout: 2000})
      }
    })
  }

  registerUser(userObject) {
    if(this.validate(userObject)) {
      this.usersApiService.registerUser(userObject)
      .subscribe(res => {
        console.log(res)
      })
    }
  }

  validate(userObject) {
    if(this.validateInput("First Name", userObject.firstName) && this.validateInput("Last Name", userObject.lastName) && this.validateEmail(userObject.email) && this.validateInput("Username", userObject.username) && this.validatePassword(userObject.password)) {
      return true
    } else {
      return false
    }
  }

  validateInput(userObjectItemName, userObjectItem) {
    if(userObjectItem.length >= 3) {
      return true
    } else {
      this.flashMessage.show(userObjectItemName + " does not meet minimum length (3)", {cssClass: "flash-failure", timeout: 2000})
    }
  }

  validateEmail(userObjectEmail) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(userObjectEmail)) {
      return true
    } else {
      this.flashMessage.show("Incorrect email format", {cssClass: "flash-failure", timeout: 2000})
    }
  }

  validatePassword(userObjectPassword) {
    if(userObjectPassword.length > 6) {
      return true
    } else {
      this.flashMessage.show("Password must be longer than 6 characters", {cssClass: "flash-failure", timeout: 3000})
    }
  }

}
