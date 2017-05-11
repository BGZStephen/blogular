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

  activeSubMenu: number = -1;

  toggleMenu() {
    let navbar = document.getElementsByClassName("navbar-output-container")[0]
    navbar.classList.toggle("navbar-visible");
  }

  toggleSubMenu(index) {
    let topMenus = document.getElementsByClassName("navbar-top-level-item")
    let topMenu = topMenus[index]
    let subMenu = topMenu.getElementsByTagName("ul")[0]

    if(index == this.activeSubMenu) {
      subMenu.style.height = "0px";
      this.activeSubMenu = -1
    } else {
      subMenu.style.height = 45 * (subMenu.children.length) + "px";
      this.activeSubMenu = index
    }
  }
}
