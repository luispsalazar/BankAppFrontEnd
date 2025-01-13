import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  authenticate(username: string, password: string): string {
    if (username == "FDMUser" && password == "1234") {
      return "Welcome " + username;
    } else {
      return "Wrong Username/Password";
    }
  }
}