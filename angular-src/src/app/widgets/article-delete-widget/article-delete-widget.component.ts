import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-article-delete-widget',
  templateUrl: './article-delete-widget.component.html',
  styleUrls: ['./article-delete-widget.component.scss']
})
export class ArticleDeleteWidgetComponent implements OnInit {

  article: object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesApiService: ArticlesApiService,
    private router: Router,
  ) {
    this.activatedRoute.params
    .map(params => params['articleId'])
    .subscribe((articleId) => {
      let articleObject = {articleId: articleId}
      this.articlesApiService.getArticleById(articleObject)
      .subscribe(res => {
        this.article = res
      })
    })
  }

  ngOnInit() {}

  deleteArticle(articleObject) {
    this.articlesApiService.deleteArticle(articleObject)
    .subscribe(res => {
      this.router.navigate(['/dashboard', {outlets: {'dashboardOut': ['articles']}}]);
    })
  }

  setOutput(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOut': [component]}}]);
  }

}
