import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  id: number;
  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.initForm();
      }
    );
  }

  private initForm() {
    let customerId;
    let customerUsername = '';
    let customerFirstName = '';
    let customerLastName = '';

    const customer = this.customerService.getCustomerById(this.id);
    customerId = customer.id;
    customerUsername = customer.username
    customerFirstName = customer.firstName;
    customerLastName = customer.lastName;

    this.customerForm = new FormGroup({
      'id': new FormControl(customerId, Validators.required),
      'username': new FormControl(customerUsername, Validators.required),
      'firstName': new FormControl(customerFirstName, Validators.required),
      'lastName': new FormControl(customerLastName, Validators.required)
    });
  }

  onEditCustomer() {
    const newCustomer: Customer = {
      id: this.customerForm.value['id'],
      username: this.customerForm.value['username'],
      firstName: this.customerForm.value['firstName'],
      lastName: this.customerForm.value['lastName']
    }

    this.customerService.updateCustomer(this.id, newCustomer);
    this.router.navigate(['/customers']);
  }

  onCancelCustomer() {
    this.router.navigate(['/customers']);
  }
}
