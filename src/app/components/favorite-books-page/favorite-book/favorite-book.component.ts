import { Component, Input } from '@angular/core';

import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-favorite-book',
  templateUrl: './favorite-book.component.html',
  styleUrls: ['./favorite-book.component.css']
})
export class FavoriteBookComponent {
  @Input() book: Book;

  constructor(private bookService: BookService) { }

  favoritesToggle() {
    this.book.isFavorite ? this.book.isFavorite = false : this.book.isFavorite = true;
    this.bookService.$favoriteBooksChanged.next(this.bookService.getFavoriteBooks());
  }
}
