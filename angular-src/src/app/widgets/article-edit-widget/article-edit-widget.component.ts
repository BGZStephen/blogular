import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-article-edit-widget',
  templateUrl: './article-edit-widget.component.html',
  styleUrls: ['./article-edit-widget.component.scss']
})
export class ArticleEditWidgetComponent implements OnInit {

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

  ngOnInit() {
  }

  setOutput(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOut': [component]}}]);
  }

  updateArticle(articleObject) {
    this.articlesApiService.updateArticle(articleObject)
    .subscribe(res => {
      this.router.navigate(['/dashboard', {outlets: {'dashboardOut': ['articles']}}]);
    })
  }

}
