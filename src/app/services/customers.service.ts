import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private baseUrl = 'http://localhost:8080/api/v1/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}