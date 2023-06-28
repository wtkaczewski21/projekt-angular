import { Component, Input } from '@angular/core';

import { Book } from 'src/app/models/Book';
import { Borrowing } from 'src/app/models/Borrowing';
import { Customer } from 'src/app/models/Customer';

import { BookService } from 'src/app/services/book.service';
import { BorrowingService } from 'src/app/services/borrowing.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-book',
  templateUrl: './customer-book.component.html',
  styleUrls: ['./customer-book.component.css']
})
export class CustomerBookComponent {

  @Input() borrowing: Borrowing;
  book: Book;
  customer: Customer;
  borrowings: Borrowing[];

  constructor(private borrowingService: BorrowingService,
    private bookService: BookService,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.book = this.bookService.getBookById(this.borrowing.bookId)
    this.customer = this.customerService.getCustomerById(this.borrowing.customerId)
  }

  onReturnBook() {
    this.borrowingService.deleteBorrowing(this.borrowing.id);
  }
}
