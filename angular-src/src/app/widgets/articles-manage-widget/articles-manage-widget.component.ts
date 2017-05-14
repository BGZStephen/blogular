import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-articles-manage-widget',
  templateUrl: './articles-manage-widget.component.html',
  styleUrls: ['./articles-manage-widget.component.scss']
})
export class ArticlesManageWidgetComponent implements OnInit {

  constructor(
    private articlesApiService: ArticlesApiService,
    private router: Router,
  ) { }

  articles: Array<object>;

  ngOnInit() {
    this.articlesApiService.getUserArticles()
    .subscribe(res => {
      this.articles = res;
    })
  }

  deleteArticle(articleObject) {
    this.articlesApiService.deleteArticle(articleObject)
    .subscribe(res => {
      console.log(res)
      this.router.navigate(['/dashboard', {outlets: {'dashboardOut': ['articles']}}]);
    })
  }

}
