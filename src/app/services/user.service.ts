import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  authenticate(username: string, password: string): string {
    if ((username == "FDMUser" && password == "1234") ||
      (username == "User1" && password == "1234") ||
      (username == "User2" && password == "1234")) {
      this.router.navigate(['/dashboard']);
      return "Welcome " + username;
    } else {
      alert('Wrong Username/Password');
      this.router.navigateByUrl('/login');
      return "Wrong Username/Password";
    }
  }
}