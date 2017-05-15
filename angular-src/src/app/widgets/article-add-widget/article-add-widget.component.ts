import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-article-add-widget',
  templateUrl: './article-add-widget.component.html',
  styleUrls: ['./article-add-widget.component.scss']
})
export class ArticleAddWidgetComponent implements OnInit {

  categories: Array<object>
  articleCategory: number = -1; // used for setting styling of categories buttons, as well as defining category id for submission on creating new articles

  constructor(
    private articlesApiService: ArticlesApiService,
    private router: Router,
  ) {
    this.getCategories()
  }

  ngOnInit() {
  }

  createArticle(articleObject) {
    if(this.articleCategory != -1) { // check for a selected category, if one isn't selected, don't attach to the newly created article
      articleObject.categories = [{categoryId: this.articleCategory}]
    }
    this.articlesApiService.createArticle(articleObject)
    .subscribe(res => {
      this.router.navigate(['/dashboard', {outlets: {'dashboardOut': ['articles']}}]);
    })
  }

  getCategories() {
    this.articlesApiService.getCategories()
    .subscribe(res => {
      this.categories = res
      console.log(this.categories)
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

}
