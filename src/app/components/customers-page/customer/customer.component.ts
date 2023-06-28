import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { BorrowingService } from 'src/app/services/borrowing.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService,
    private borrowingService: BorrowingService,
    private router: Router,
    private route: ActivatedRoute) { }

  onDisplayBorrowings() {
    this.router.navigate([this.customer.id + '/' + this.customer.username + '/borrowed-books'], { relativeTo: this.route });
  }

  onEditCustomer() {
    this.router.navigate(['edit/' + this.customer.id], { relativeTo: this.route });
  }

  onDeleteCustomer() {
    const isBorrowed = this.borrowingService.getBorrowingsByCustomerId(this.customer.id)
    console.log(isBorrowed)

    if (isBorrowed.length > 0) {
      alert('Return all borrowed books before deleting')
    } else {
      this.customerService.deleteCustomer(this.customer.id);
    }
  }
}