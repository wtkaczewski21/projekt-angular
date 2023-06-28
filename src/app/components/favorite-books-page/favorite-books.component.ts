import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit, OnDestroy {
  favoriteBooks: Book[];
  private subscription: Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.favoriteBooks = this.bookService.getFavoriteBooks();
    this.subscription = this.bookService.$favoriteBooksChanged.subscribe(
      (favoritebooks: Book[]) => {
        this.favoriteBooks = favoritebooks;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
