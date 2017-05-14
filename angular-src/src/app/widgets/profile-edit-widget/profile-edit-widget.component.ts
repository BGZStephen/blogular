import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from "@angular/router"

@Component({
  selector: 'app-profile-edit-widget',
  templateUrl: './profile-edit-widget.component.html',
  styleUrls: ['./profile-edit-widget.component.scss']
})
export class ProfileEditWidgetComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router,
    private flashMessage: FlashMessagesService,
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

  updateProfile(userObject) {
    this.usersApiService.updateProfile(userObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show("Profile update successful", {cssClass: "flash-success", timeout: 2000})
      } else {
        this.flashMessage.show(res.message, {cssClass: "flash-failure", timeout: 2000})
      }
    })
  }

}
