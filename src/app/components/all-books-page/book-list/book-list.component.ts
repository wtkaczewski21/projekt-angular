import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../models/Book';
import { BookStoreService } from '../../../dom-service/store/book-store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: Book[];
  id: number;

  constructor(private bookService: BookStoreService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}