export class Borrowing {
    id: number;
    bookId: number;
    customerId: number;

    constructor(id: number, bookId: number, customerId: number) {
        this.id = id;
        this.bookId = bookId;
        this.customerId = customerId;
    }
}