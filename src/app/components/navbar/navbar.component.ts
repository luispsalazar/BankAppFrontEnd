import { Component, NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, JsonPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  constructor(private router: Router) {
  }

  isDropdown1Open = false;
  isDropdown2Open = false;

  toggleDropdown(dropdown: string) {
    if (dropdown === 'dropdown1') {
      this.isDropdown1Open = !this.isDropdown1Open;
      this.isDropdown2Open = false; // Close other dropdown
    } else if (dropdown === 'dropdown2') {
      this.isDropdown2Open = !this.isDropdown2Open;
      this.isDropdown1Open = false; // Close other dropdown
    }
  }

  onAddAccountClick() {
    this.router.navigateByUrl('/addaccount');
  }

  isNavbarVisible(): boolean {
    // Routes where the navbar should be hidden:
    const hiddenRoutes = ['/login', '/register', '/homepage'];
    return !hiddenRoutes.includes(this.router.url);
  }
}