import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  title = 'Homepage';

  onLoginButtonClick(): void {
    console.log('First button clicked!');
  }

  onRegisterButtonClick(): void {
    console.log('Second button clicked!');
  }

  onLogoutButtonClick() {
    throw new Error('Method not implemented.');
  }
}