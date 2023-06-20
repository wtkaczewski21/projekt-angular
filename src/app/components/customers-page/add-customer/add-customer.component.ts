import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) { }

  onAddCustomer(form: NgForm) {
    const value = form.value;
    const newCustomer = new Customer(value.id, value.username, value.firstName, value.lastName)
    this.customerService.addCustomer(newCustomer);
    this.router.navigate(['/customers'])
  }

  onCancelCustomer() {
    this.router.navigate(['/customers']);
  }
}
