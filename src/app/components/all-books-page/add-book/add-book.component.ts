import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../models/Book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let bookId;
    let bookTitle = '';
    let bookAuthor = '';
    let bookImgUrl = '';
    let isFavorite = false;

    this.bookForm = new FormGroup({
      'id': new FormControl(bookId),
      'title': new FormControl(bookTitle, Validators.required),
      'author': new FormControl(bookAuthor, Validators.required),
      'imgUrl': new FormControl(bookImgUrl, Validators.required),
      'isFavorite': new FormControl(isFavorite)
    });
  }

  onAddBook() {
    const newBook: Book = {
      id: this.bookForm.value['id'],
      title: this.bookForm.value['title'],
      author: this.bookForm.value['author'],
      imgUrl: this.bookForm.value['imgUrl'],
      isFavorite: this.bookForm.value['isFavorite']
    }

    this.bookService.addBook(newBook);
    this.router.navigate(['/all-books'])
  }

  onCancelBook() {
    this.router.navigate(['/all-books']);
  }
}
