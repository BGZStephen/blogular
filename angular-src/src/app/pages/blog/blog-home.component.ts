import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  articles: Array<object>;

  constructor(
    private articlesApiService: ArticlesApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
    .map(params => params['username'])
    .subscribe((username) => {
      let userObject = {author: username}
      this.articlesApiService.getArticlesByAuthor(userObject)
      .subscribe(res => {
        this.articles = res
      })
    })
  }

  ngOnInit() {
  }

  descriptionStyle(article) {
    if(!article.mainImageUrl) {
      return {"width": "100%"}
    } else {
      return {"width": "55%"}
    }
  }

}
