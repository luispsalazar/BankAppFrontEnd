import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {

  constructor(private router: Router) {
  }

  onLoginButtonClick(): void {
    this.router.navigateByUrl('/login');
  }

  onRegisterButtonClick(): void {
    this.router.navigateByUrl('/register');
  }
}