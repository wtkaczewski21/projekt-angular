import { Component, Input, OnInit } from '@angular/core';
import { Borrowing } from 'src/app/models/Borrowing';
import { BorrowingService } from 'src/app/services/borrowing.service';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent implements OnInit {
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
