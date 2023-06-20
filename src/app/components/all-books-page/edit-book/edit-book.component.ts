import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookStoreService } from 'src/app/dom-service/store/book-store.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id: number;
  bookForm: FormGroup;

  constructor(private bookService: BookStoreService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.initForm();
      }
    );

    // this.id = (Number)(this.route.snapshot.params.id)
  }

  private initForm() {
    let bookId;
    let bookTitle = '';
    let bookAuthor = '';
    let bookImgUrl = '';
    let isFavorite = false;

    const book = this.bookService.getBookById(this.id);
    bookId = book.id;
    bookTitle = book.title;
    bookAuthor = book.author;
    bookImgUrl = book.imgUrl;
    isFavorite = book.isFavorite;

    this.bookForm = new FormGroup({
      'id': new FormControl(bookId, Validators.required),
      'title': new FormControl(bookTitle, Validators.required),
      'author': new FormControl(bookAuthor, Validators.required),
      'imgUrl': new FormControl(bookImgUrl, Validators.required),
      'isFavorite': new FormControl(isFavorite, Validators.required)
    });
  }

  onEditBook() {
    const newBook = new Book(
      this.bookForm.value['id'],
      this.bookForm.value['title'],
      this.bookForm.value['author'],
      this.bookForm.value['imgUrl'],
      this.bookForm.value['isFavorite']);
    ;

    this.bookService.updateBook(this.id, newBook);
    this.router.navigate(['/all-books']);
  }

  onCancelBook() {
    this.router.navigate(['/all-books']);
  }
}
