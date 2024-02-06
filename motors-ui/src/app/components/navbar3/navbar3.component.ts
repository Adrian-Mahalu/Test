import { Component, ViewEncapsulation } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  styleUrls: ['./navbar3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Navbar3Component {
  showNavbar: boolean;
  private prevScrollPos = window.scrollY;

  onWindowScroll(event: any): void {
    const currentScrollPos = window.scrollY;
    this.showNavbar = (this.prevScrollPos > currentScrollPos) ? true : false;
    this.prevScrollPos = currentScrollPos;
  }
}
