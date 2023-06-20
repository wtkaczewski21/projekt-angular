import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent {
  books: Book[];
  favoriteBooks: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.favoriteBooks = this.books.filter(book => book.isFavorite == true);
  }
}
