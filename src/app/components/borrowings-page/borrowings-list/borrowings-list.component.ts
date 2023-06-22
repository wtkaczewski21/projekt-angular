import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Borrowing } from 'src/app/models/Borrowing';
import { BorrowingService } from 'src/app/services/borrowing.service';

@Component({
  selector: 'app-borrowings-list',
  templateUrl: './borrowings-list.component.html',
  styleUrls: ['./borrowings-list.component.css']
})
export class BorrowingsListComponent implements OnInit, OnDestroy {
  borrowings: Borrowing[];
  private subscription: Subscription;

  constructor(private borrowingService: BorrowingService) {

  }

  ngOnInit() {
    this.borrowings = this.borrowingService.getBorrowings();

    this.subscription = this.borrowingService.$borrowingsChanged.subscribe(
      (borrowings: Borrowing[]) => {
        this.borrowings = borrowings;
      }
    )
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
