import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.scss']
})
export class ProfileWidgetComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
  ) { }

  user: object;

  ngOnInit() {
    this.usersApiService.getLoggedInUser()
    .subscribe(res => {
      this.user = res
    })
  }

}
