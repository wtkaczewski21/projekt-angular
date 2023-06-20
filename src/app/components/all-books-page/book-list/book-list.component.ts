import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../../../models/Book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  id: number;
  private subscription: Subscription;

  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.subscription = this.bookService.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    )
  };

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}