import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UsersApiService } from "../../services/users-api.service"

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersApiService.getLoggedInUser()
    .subscribe(res => {
      this.loggedInUser = res
    })
  }

  loggedInUser: object;
  menuVisible: boolean = false;
  activeSubMenu: number = -1;

  menuToggle() {
    if(screen.width > 1024) {
      return {"min-height": "calc(100vh - 50px)"}
    }
    let navbar = document.getElementsByClassName("navbar-output-container")[0]
    let height = 45 * (navbar.getElementsByClassName("navbar-top-level-menu")[0].children.length + 1) + "px"
    if(screen.width < 1024 && this.menuVisible == true) {
      return {"min-height": height, "max-height": "100vh"}
    }
  }

  setActiveSubMenu(menuIndex) {
    if(this.activeSubMenu == menuIndex) {
      this.activeSubMenu = -1
    } else {
      this.activeSubMenu = menuIndex
    }
  }

  subMenuToggle(index) {
    let subMenu = document.getElementsByClassName("navbar-second-level-menu")[index]
    let height = 45 * subMenu.children.length + "px"
    if(index == this.activeSubMenu) {
      return {"height": height}
    } else {
      return {"height": "0"}
    }
  }

  setOutput(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOut': [component]}}]);
  }
}
