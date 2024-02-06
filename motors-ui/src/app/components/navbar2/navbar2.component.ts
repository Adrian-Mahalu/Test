import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component {
  showNavbar: boolean;
  showProfileOptions: boolean;
  private prevScrollPos = window.scrollY;


  onWindowScroll(event: any): void {
    const currentScrollPos = window.scrollY;
  
    if (this.prevScrollPos > currentScrollPos) {
      this.showNavbar = true;

    } else {
      this.showNavbar = false;
      this.hideProfileOptionsMenu();
    }
  
    this.prevScrollPos = currentScrollPos;
  }

  showProfileOptionsMenu(): void {
      this.showProfileOptions = true;
  }
  
  hideProfileOptionsMenu(): void {
    this.showProfileOptions = false;
  }
}
