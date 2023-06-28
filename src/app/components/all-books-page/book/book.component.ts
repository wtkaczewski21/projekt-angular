import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../../models/Book';
import { BookService } from '../../../services/book.service';
import { BorrowingService } from 'src/app/services/borrowing.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent {

    @Input() book: Book;

    constructor(private bookService: BookService,
        private borrowingService: BorrowingService,
        private router: Router,
        private route: ActivatedRoute) { }

    favoritesToggle() {
        this.book.isFavorite ? this.book.isFavorite = false : this.book.isFavorite = true;
    }

    onBorrowBook() {
        this.router.navigate(['borrowings/new/' + this.book.id]);
    }

    onEditBook() {
        this.router.navigate(['edit/' + this.book.id], { relativeTo: this.route });
    }

    onDeleteBook() {
        const isBorrowed = this.borrowingService.getBorrowingsByBookId(this.book.id)
        console.log(isBorrowed)

        if (isBorrowed.length > 0) {
            alert('Return all borrowed copies of this book before deleting')
        } else {
            this.bookService.deleteBook(this.book.id);
        }
    }
}
