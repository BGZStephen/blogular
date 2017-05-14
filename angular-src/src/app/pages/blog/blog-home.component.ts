import { Component, OnInit } from '@angular/core';
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  constructor(
    private articlesApiService: ArticlesApiService
  ) { }

  articles: Array<object>;

  ngOnInit() {
    this.articlesApiService.getUserArticles()
    .subscribe(res => {
      this.articles = res
      console.log(this.articles)
    })
  }

  descriptionStyle(article) {
    if(!article.mainImageUrl) {
      return {"width": "100%"}
    } else {
      return {"width": "55%"}
    }
  }

}
