import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  constructor(private router: Router) {
  }

  onRegisterButtonClick() {
    this.router.navigateByUrl('/dashboard');
  }
}