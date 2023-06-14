import { Component, Input } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-popular-book',
  templateUrl: './popular-book.component.html',
  styleUrls: ['./popular-book.component.css'],
})
export class PopularBookComponent {
  @Input() book: Book;
}
