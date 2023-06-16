import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../models/Book';
import { BookStoreService } from '../../../dom-service/store/book-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  id: number;
  private subscription: Subscription;

  constructor(private bookService: BookStoreService,
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
    // this.subscription.unsubscribe();
  }
}