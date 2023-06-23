import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, OnDestroy {
  customers: Customer[];
  id: number;
  private subscription: Subscription;
  searchForm;

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.subscription = this.customerService.customersChanged.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    )

    this.searchForm = this.formBuilder.group({
      search: '',
    });
  };

  onNewCustomer() {
    this.router.navigate(['new'], { relativeTo: this.route });
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
