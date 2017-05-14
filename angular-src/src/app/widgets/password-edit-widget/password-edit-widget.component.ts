import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"
import { UsersApiService } from "../../services/users-api.service"

@Component({
  selector: 'app-password-edit-widget',
  templateUrl: './password-edit-widget.component.html',
  styleUrls: ['./password-edit-widget.component.scss']
})
export class PasswordEditWidgetComponent implements OnInit {

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private usersApiService: UsersApiService
  ) { }

  ngOnInit() {
  }

  setOutput(component?) {
    if(!component) {
      this.router.navigate([{ outlets: {'primary': ['dashboard'], 'dashboardOut': null}}]);
    } else {
      this.router.navigate(['/dashboard', {outlets: {'dashboardOut': [component]}}]);
    }
  }

  updatePassword(userObject) {
    if(userObject.queryPassword == userObject.newPassword) {
      this.flashMessage.show("Current password and new Password cannot match", {cssClass: "flash-failure", timeout: 2000})
    } else {
      this.usersApiService.updatePassword(userObject)
      .subscribe(res => {
        if(res.success) {
          this.flashMessage.show(res.message, {cssClass: "flash-success", timeout: 2000})
        } else {
          this.flashMessage.show(res.message, {cssClass: "flash-failure", timeout: 2000})
        }
      })
    }
  }

}
