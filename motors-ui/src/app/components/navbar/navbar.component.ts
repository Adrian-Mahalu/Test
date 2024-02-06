import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
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
