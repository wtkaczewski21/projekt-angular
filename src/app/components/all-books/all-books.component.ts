import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BOOKS } from '../../mock-books';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  books: Book[] = BOOKS;
}
