import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Borrowing } from 'src/app/models/Borrowing';
import { BorrowingService } from 'src/app/services/borrowing.service';
import { BookService } from 'src/app/services/book.service';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-new-borrowing',
  templateUrl: './new-borrowing.component.html',
  styleUrls: ['./new-borrowing.component.css']
})
export class NewBorrowingComponent implements OnInit {
  id: number;
  customers: Customer[];
  borrowingForm: FormGroup;

  constructor(private bookService: BookService,
    private customerService: CustomerService,
    private borrowingService: BorrowingService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.initForm();
      }
    );
  }

  private initForm() {
    this.customers = this.customerService.getCustomers();
    let selectedCustomer = '';
    let bookId;
    let bookTitle = '';
    let bookAuthor = '';
    let bookImgUrl = '';

    const book = this.bookService.getBookById(this.id);
    bookId = book.id;
    bookTitle = book.title;
    bookAuthor = book.author;
    bookImgUrl = book.imgUrl;

    this.borrowingForm = new FormGroup({
      'selectedCustomer': new FormControl(null, Validators.required),
      'id': new FormControl(bookId, Validators.required),
      'title': new FormControl(bookTitle, Validators.required),
      'author': new FormControl(bookAuthor, Validators.required),
      'imgUrl': new FormControl(bookImgUrl, Validators.required)
    });
  }

  onBorrowBook() {
    const newBorrow: Borrowing = {
      id: this.borrowingForm.value[''],
      bookId: this.borrowingForm.value['id'],
      customerId: this.borrowingForm.value['selectedCustomer']
    };

    this.borrowingService.addBorrowing(newBorrow);
    this.router.navigate(['/all-books']);
  }

  onCancelBorrowing() {
    this.router.navigate(['/all-books']);
  }
}
