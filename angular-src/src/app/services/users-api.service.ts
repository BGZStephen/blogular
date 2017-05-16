import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { tokenNotExpired } from "angular2-jwt"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(
    private http: Http,
  ) {}

  authToken: any;
  user: any;

  authenticate(userObject) {
    return this.http.post("users/authenticate", userObject)
    .map(res => res.json())
  }

  getLoggedInUser() {
    this.loadToken()
    let userObject = this.user
    return this.http.post("users/getById", userObject)
    .map(res => res.json())
  }

  loadToken() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.authToken = localStorage.getItem('token')
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    localStorage.clear()
    this.user = "";
    this.authToken = "";
  }

  registerUser(userObject) {
    return this.http.post("users/register", userObject)
    .map(res => res.json())
  }

  storeToken(userObject) {
    localStorage.setItem('token', userObject.token)
    localStorage.setItem('user', JSON.stringify(userObject.user))
    this.authToken = userObject.token;
    this.user = userObject.user;
  }

  updateProfile(userObject) {
    this.loadToken()
    userObject.userId = this.user.userId
    return this.http.post("users/update", userObject)
    .map(res => res.json())
  }

  updatePassword(userObject) {
    this.loadToken()
    userObject.userId = this.user.userId
    return this.http.post("users/updatePassword", userObject)
    .map(res => res.json())
  }

}
