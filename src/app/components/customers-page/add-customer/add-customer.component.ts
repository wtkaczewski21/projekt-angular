import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) { }

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
