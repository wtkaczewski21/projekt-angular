import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Borrowing } from 'src/app/models/Borrowing';
import { Customer } from 'src/app/models/Customer';
import { BookService } from 'src/app/services/book.service';
import { BorrowingService } from 'src/app/services/borrowing.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-new-borrowing',
  templateUrl: './new-borrowing.component.html',
  styleUrls: ['./new-borrowing.component.css']
})
export class NewBorrowingComponent implements OnInit {
  id: number;
  customers: Customer[];
  borrowForm: FormGroup;

  constructor(private bookService: BookService,
    private customerService: CustomerService,
    private borrowingService: BorrowingService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuiler: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.initForm();
      }
    );
    this.customers = this.customerService.getCustomers();
    this.borrowForm.get('selectedCustomer')?.valueChanges.subscribe((res: number) => {
      console.log(res);
    })
  }

  private initForm() {
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

    this.borrowForm = new FormGroup({
      'selectedCustomer': new FormControl(),
      'id': new FormControl(bookId),
      'title': new FormControl(bookTitle),
      'author': new FormControl(bookAuthor),
      'imgUrl': new FormControl(bookImgUrl)
    });
  }

  onBorrowBook() {
    const newBorrow = new Borrowing(
      this.borrowForm.value[''],
      this.borrowForm.value['id'],
      this.borrowForm.value['selectedCustomer']);
    ;

    this.borrowingService.updateBorrowing(this.id, newBorrow);
    this.router.navigate(['/borrowings']);
  }

  onCancelBorrowing() {
    this.router.navigate(['/all-books']);
  }
}
