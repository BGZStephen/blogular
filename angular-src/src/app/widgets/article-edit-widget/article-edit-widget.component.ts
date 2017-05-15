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
  categories: Array<object>
  articleCategory: number = -1;

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
        if(res.categories[0]) {
          this.articleCategory = res.categories[0].categoryId
        }
      })
    })
    this.getCategories()
  }

  ngOnInit() {
  }

  getCategories() {
    this.articlesApiService.getCategories()
    .subscribe(res => {
      this.categories = res
    })
  }

  setArticleCategory(index) {
    if(index == this.articleCategory) {
      this.articleCategory = -1
    } else {
      this.articleCategory = index
    }
  }

  setCategoryStyle(index) {
    if(index == this.articleCategory) {
      return {"background": "#20275E", "color": "#f5f5f5"}
    } else {
      return {"background": "#f5f5f5", "color": "#20275E"}
    }
  }

  setOutput(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOut': [component]}}]);
  }

  updateArticle(articleObject) {
    if(this.articleCategory == -1) {
      articleObject.categories = []
    } else {
      articleObject.categories = [{categoryId: this.articleCategory}]
    }
    this.articlesApiService.updateArticle(articleObject)
    .subscribe(res => {
      this.router.navigate(['/dashboard', {outlets: {'dashboardOut': ['articles']}}]);
    })
  }

}
