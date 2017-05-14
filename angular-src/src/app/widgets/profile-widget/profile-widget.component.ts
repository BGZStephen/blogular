import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.scss']
})
export class ProfileWidgetComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router,
  ) { }

  user: object;

  ngOnInit() {
    this.usersApiService.getLoggedInUser()
    .subscribe(res => {
      this.user = res
    })
  }

  setOutput(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOut': [component]}}]);
  }

}
