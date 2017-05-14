import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-profile-edit-widget',
  templateUrl: './profile-edit-widget.component.html',
  styleUrls: ['./profile-edit-widget.component.scss']
})
export class ProfileEditWidgetComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router
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
