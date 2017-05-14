import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ArticlesApiService } from "../../services/articles-api.service"

@Component({
  selector: 'app-blog-individual',
  templateUrl: './blog-individual.component.html',
  styleUrls: ['./blog-individual.component.scss']
})
export class BlogIndividualComponent implements OnInit {

  article: object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesApiService: ArticlesApiService,
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

}
