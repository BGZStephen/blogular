import { Component, OnInit } from '@angular/core';
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-articles-manage-widget',
  templateUrl: './articles-manage-widget.component.html',
  styleUrls: ['./articles-manage-widget.component.scss']
})
export class ArticlesManageWidgetComponent implements OnInit {

  constructor(
    private articlesApiService: ArticlesApiService
  ) { }

  articles: Array<object>;

  ngOnInit() {
    this.articlesApiService.getUserArticles()
    .subscribe(res => {
      this.articles = res;
    })
  }

}
