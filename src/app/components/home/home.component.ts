import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BOOKS } from '../../mock-books';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Book[] = BOOKS;
}
