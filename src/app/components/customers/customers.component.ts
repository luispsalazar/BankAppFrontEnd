import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone:true,
  imports: [RouterModule, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})

export class CustomersComponent implements OnInit {

  title = 'Customers';

  customers: any[] = [];
  
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(data => {
        this.customers = data;
      });
  }
}