import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  title = 'Login';

  message: string = "";

  constructor(private userService: UserService) { }

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Mail' },
    { id: 4, name: 'SMS' }
  ]

  authenticateUser(username: HTMLInputElement, password: HTMLInputElement) {
    this.message = this.userService.authenticate(username.value, password.value);
    username.value = "";
    password.value = "";
  }

  display(username: NgModel) {
    console.log(username.value);
  }
}