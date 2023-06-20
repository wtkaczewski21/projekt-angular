import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../models/Book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newBook = new Book(value.id, value.title, value.author, value.imgUrl, value.isFavorite)
    this.bookService.addBook(newBook);
    this.router.navigate(['/all-books'])
  }

  onCancelBook() {
    this.router.navigate(['/all-books']);
  }
}
