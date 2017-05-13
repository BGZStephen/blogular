import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class ArticlesApiService {

    constructor(
      private http: Http,
    ) {}

    authToken: any;
    user: any;

    getUserArticles() {
      this.loadToken()
      let userObject = this.user
      return this.http.post("http://localhost:3005/articles/getByUser", userObject)
      .map(res => res.json())
    }

    loadToken() {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.authToken = localStorage.getItem('token')
    }

  }
