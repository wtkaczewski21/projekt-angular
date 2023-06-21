import { Subject } from "rxjs";
import { Borrowing } from "../models/Borrowing";

export class BorrowingService {
    private borrowings: Array<Borrowing> = [
        { id: 1, bookId: 1, customerId: 1 },
        { id: 2, bookId: 2, customerId: 3 },
        { id: 3, bookId: 3, customerId: 2 },
    ]

    borrowingsChanged = new Subject<Borrowing[]>();
    borrowingId: number;

    getBorrowings() {
        return this.borrowings.slice();

    }

    getBorrowingById(id: number) {
        return this.borrowings.find(borrowing => borrowing.id === id)
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
    }

    deleteBorrowing(id: number) {
        this.borrowingId = this.borrowings.findIndex(borrowing => borrowing.id === id);
        this.borrowings.splice(this.borrowingId, 1);
        this.borrowingsChanged.next(this.borrowings.slice());
    }
}