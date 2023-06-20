import { Subject } from "rxjs";
import { Borrowing } from "../models/Borrowing";

export class BorrowingService {
    private borrowings: Borrowing[] = [
        new Borrowing(1, 1, 1),
        new Borrowing(2, 2, 3),
        new Borrowing(3, 3, 2),
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

    updateBorrowing(id: number, newBorrowing: Borrowing) {
        let borrowingUpdate = this.borrowings.findIndex(borrowing => borrowing.id === id);
        this.borrowings[borrowingUpdate] = newBorrowing;
    }

    deleteBorrowing(id: number) {
        this.borrowingId = this.borrowings.findIndex(borrowing => borrowing.id === id);
        this.borrowings.splice(this.borrowingId, 1);
        this.borrowingsChanged.next(this.borrowings.slice());
    }
}