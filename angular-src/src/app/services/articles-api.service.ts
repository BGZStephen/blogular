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

    createArticle(articleObject) {
      this.loadToken()
      articleObject.userId = this.user.userId
      articleObject.username = this.user.username
      return this.http.post("articles/create", articleObject)
      .map(res => res.json())
    }

    deleteArticle(articleObject) {
      return this.http.post("articles/deleteOne", articleObject)
      .map(res => res.json())
    }

    getArticlesByAuthor(userObject) {
      return this.http.post("articles/getByAuthor", userObject)
      .map(res => res.json())
    }

    getArticleById(articleObject) {
      return this.http.post("articles/getById", articleObject)
      .map(res => res.json())
    }

    getCategories() {
      return this.http.post("categories/getAll", {})
      .map(res => res.json())
    }

    getUserArticles() {
      this.loadToken()
      let userObject = this.user
      return this.http.post("articles/getByUser", userObject)
      .map(res => res.json())
    }

    loadToken() {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.authToken = localStorage.getItem('token')
    }

    updateArticle(articleObject) {
      return this.http.post("articles/update", articleObject)
      .map(res => res.json())
    }

  }
