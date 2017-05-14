import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-article-add-widget',
  templateUrl: './article-add-widget.component.html',
  styleUrls: ['./article-add-widget.component.scss']
})
export class ArticleAddWidgetComponent implements OnInit {

  constructor(
    private articlesApiService: ArticlesApiService
  ) { }

  ngOnInit() {
  }

  createArticle(articleObject) {
    this.articlesApiService.createArticle(articleObject)
    .subscribe(res => {
      console.log(res)
    })
  }

}
