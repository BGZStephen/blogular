import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UsersApiService } from "../../services/users-api.service"

@Component({
  selector: 'app-dashboard-notification-bar',
  templateUrl: './dashboard-notification-bar.component.html',
  styleUrls: ['./dashboard-notification-bar.component.scss']
})
export class DashboardNotificationBarComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.usersApiService.logout()
    this.router.navigate(['/'])
  }
}
