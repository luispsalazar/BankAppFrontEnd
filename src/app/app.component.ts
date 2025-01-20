import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AddaccountComponent } from './components/addaccount/addaccount.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from "./components/register/register.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountsComponent, AddaccountComponent, CustomersComponent, DashboardComponent, HomepageComponent, LoginComponent, NavbarComponent, NotfoundComponent, RegisterComponent, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}