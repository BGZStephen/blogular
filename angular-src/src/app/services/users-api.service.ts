import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(
    private http: Http,
  ) {}

  authToken: any;
  user: any;


  authenticate(userObject) {
    return this.http.post("http://localhost:3005/users/authenticate", userObject)
    .map(res => res.json())
  }

  registerUser(userObject) {
    return this.http.post("http://localhost:3005/users/register", userObject)
    .map(res => res.json())
  }

  storeToken(userObject) {
    localStorage.setItem('token', userObject.token)
    localStorage.setItem('user', JSON.stringify(userObject.user))
    this.authToken = userObject.token;
    this.user = userObject.user;
  }

}
