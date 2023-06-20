import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {
  customers: Customer[];
  id: number;

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  };

  onNewCustomer() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
