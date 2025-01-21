import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addaccount',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './addaccount.component.html',
  styleUrl: './addaccount.component.scss'
})

export class AddaccountComponent {
  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      name: ['', Validators.required],
      customertype: ['', Validators.required],
      streetnumber: ['', Validators.required],
      postalcode: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      const accountData = this.accountForm.value;
      console.log('Account Added', accountData);
      alert('Account successfully added!');
      this.accountForm.reset();
    }
  }
}