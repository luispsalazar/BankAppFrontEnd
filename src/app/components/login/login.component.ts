import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  message: string = "";

  constructor(private userService: UserService) { }

  authenticateUser(username: HTMLInputElement, password: HTMLInputElement) {
    this.message = this.userService.authenticate(username.value, password.value);
    username.value = "";
    password.value = "";
  }

  display(username: NgModel) {
    console.log(username.value);
  }
}