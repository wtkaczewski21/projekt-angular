import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookStoreService } from 'src/app/dom-service/store/book-store.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @ViewChild('...', { static: false }) bookForm: NgForm;
  book: Book;
  id: number;
  // editedBook: Book;

  constructor(private route: ActivatedRoute, private bookService: BookStoreService,
    private router: Router,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //   }
    // )

    this.id = (Number)(this.route.snapshot.params.id)
    this.book = this.bookService.getBookById(this.id);

    // this.bookForm.setValue({
    //   title: "test",
    //   author: "test",
    //   imgUrl: "test"
    // })
  }

  onCancelBook() {
    this.router.navigate(['/all-books']);
  }
}
