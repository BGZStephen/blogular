import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuVisible: boolean = false;
  activeSubMenu: number = -1;

  menuToggle() {
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
    let subMenu = document.getElementsByClassName("navbar-second-level-menu")[0]
    let height = 45 * subMenu.children.length + "px"
    if(index == this.activeSubMenu) {
      return {"height": height}
    } else {
      return {"height": "0"}
    }
  }
}
