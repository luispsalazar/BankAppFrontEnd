import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddaccountComponent } from './components/addaccount/addaccount.component';
import { CustomersComponent } from './components/customers/customers.component';

export const routes: Routes = [
    // { path: '', component: HomepageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'homepage', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'addaccount', component: AddaccountComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NavbarComponent],
    exports: [RouterModule, NavbarComponent],
})
export class AppRoutingModule { }