import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let customerId;
    let username = '';
    let firstName = '';
    let lastName = '';

    this.customerForm = new FormGroup({
      'id': new FormControl(customerId),
      'username': new FormControl(username, Validators.required),
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required)
    });
  }

  onAddCustomer() {
    const newCustomer: Customer = {
      id: this.customerForm.value['id'],
      username: this.customerForm.value['username'],
      firstName: this.customerForm.value['firstName'],
      lastName: this.customerForm.value['lastName']
    }

    this.customerService.addCustomer(newCustomer);
    this.router.navigate(['/customers'])
  }

  onCancelCustomer() {
    this.router.navigate(['/customers']);
  }
}
