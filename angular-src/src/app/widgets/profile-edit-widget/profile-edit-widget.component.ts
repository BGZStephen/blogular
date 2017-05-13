import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"

@Component({
  selector: 'app-profile-edit-widget',
  templateUrl: './profile-edit-widget.component.html',
  styleUrls: ['./profile-edit-widget.component.scss']
})
export class ProfileEditWidgetComponent implements OnInit {

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
