import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-blog-navbar-widget',
  templateUrl: './blog-navbar-widget.component.html',
  styleUrls: ['./blog-navbar-widget.component.scss']
})
export class BlogNavbarWidgetComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  user: string;

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['username'])
    .subscribe((username) => {
      this.user = username
    })
  }

}
