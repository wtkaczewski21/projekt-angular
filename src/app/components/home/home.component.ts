import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BookStoreService } from '../../dom-service/store/book-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[];

  constructor(private bookStoreService: BookStoreService) {
  }

  ngOnInit() {
    this.books = this.bookStoreService.getBooks();
  }
}
