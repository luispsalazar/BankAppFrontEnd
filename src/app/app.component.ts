import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomepageComponent, DashboardComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BankAppFrontEnd';
}