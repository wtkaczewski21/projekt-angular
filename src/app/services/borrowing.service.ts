import { Subject } from "rxjs";
import { Borrowing } from "../models/Borrowing";
import { BookService } from "./book.service";
import { Injectable } from "@angular/core";

@Injectable()
export class BorrowingService {
    private borrowings: Array<Borrowing> = [
        { id: 1, bookId: 1, customerId: 1 },
        { id: 2, bookId: 2, customerId: 2 },
        { id: 3, bookId: 5, customerId: 3 },
    ];

    $borrowingsChanged = new Subject<Borrowing[]>();
    $customerBorrowingsChanged = new Subject<Borrowing[]>();

    constructor(private bookService: BookService) { }

    getBorrowings() {
        return this.borrowings.slice();
    }

    getBorrowingById(id: number) {
        return this.borrowings.find(borrowing => borrowing.id === id)
    }

    getBorrowingsByBookId(id: number) {
        return this.borrowings.filter(borrowing => borrowing.bookId == id)
    }

    getBorrowingsByCustomerId(id: number) {
        return this.borrowings.filter(borrowing => borrowing.customerId == id)
    }

    addBorrowing(borrowing: Omit<Borrowing, 'id'>) {
        let autoId;
        const lastElement = this.borrowings[this.borrowings.length - 1];
        if (lastElement !== undefined) {
            autoId = lastElement.id + 1;
        }
        else {
            autoId = 1;
        }
        this.borrowings.push({ ...borrowing, id: autoId });

        this.bookService.decreseAvailabileCopies(borrowing.bookId);
    }

    deleteBorrowing(id: number) {
        const borrowingIndex = this.borrowings.findIndex(borrowing => borrowing.id === id);

        const borrowing = this.borrowings.find(borrowing => borrowing.id === id)
        const bookId = borrowing.bookId;
        const customerId = borrowing.customerId;

        this.borrowings.splice(borrowingIndex, 1);

        this.bookService.increaseAvailabileCopies(bookId);

        this.$borrowingsChanged.next(this.borrowings.slice());
        this.$customerBorrowingsChanged.next(this.borrowings.filter(borrowing => borrowing.customerId == customerId));
    }
}