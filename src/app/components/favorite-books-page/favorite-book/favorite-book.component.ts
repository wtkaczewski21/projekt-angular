import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-favorite-book',
  templateUrl: './favorite-book.component.html',
  styleUrls: ['./favorite-book.component.css']
})
export class FavoriteBookComponent {
  @Input() book: Book;
}
