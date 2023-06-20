import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  @Input() customer: Customer;
  id: number

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  onEditCustomer() {
    this.router.navigate(['edit/' + this.customer.id], { relativeTo: this.route });
  }

  onDeleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id);
  }
}