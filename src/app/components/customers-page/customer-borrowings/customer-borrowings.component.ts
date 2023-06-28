import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Borrowing } from 'src/app/models/Borrowing';
import { BorrowingService } from 'src/app/services/borrowing.service';

@Component({
  selector: 'app-customer-borrowings',
  templateUrl: './customer-borrowings.component.html',
  styleUrls: ['./customer-borrowings.component.css']
})
export class CustomerBorrowingsComponent implements OnInit, OnDestroy {

  borrowings: Borrowing[];
  customerId: number;
  private subscription: Subscription;

  constructor(private borrowingService: BorrowingService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.customerId = +params['id'];
      }
    );

    this.borrowings = this.borrowingService.getBorrowingsByCustomerId(this.customerId);

    this.subscription = this.borrowingService.$customerBorrowingsChanged.subscribe(
      (borrowings: Borrowing[]) => {
        this.borrowings = borrowings;
      }
    )
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
