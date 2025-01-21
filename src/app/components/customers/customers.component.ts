// // import { Component, OnInit } from '@angular/core';
// // import { RouterModule } from '@angular/router';
// // import { CustomersService } from '../../services/customers.service';
// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { HttpClientModule } from '@angular/common/http';

// import { Component } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { CustomersService } from '../../services/customers.service';


// @Component({
//   selector: 'app-customers',
//   standalone: true,
//   imports: [RouterModule, CommonModule, HttpClientModule],
//   templateUrl: './customers.component.html',
//   styleUrls: ['./customers.component.scss']
// })

// export class CustomersComponent implements OnInit {

//   title = 'Customers';
//   customers: any[] = [];

//   constructor(private customerService: CustomersService) { }

//   ngOnInit(): void {
//     this.getCustomers();
//   }

//   getCustomers(): void {
//     this.customerService.getCustomers()
//       .subscribe(data => {
//         this.customers = data;
//       });
//   }
// }

import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from '../../services/customers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomersService]
})

export class CustomersComponent {
  title = 'Customers';
  customers: any[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}