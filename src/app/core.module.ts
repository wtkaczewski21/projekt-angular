import { NgModule } from "@angular/core";

import { BookService } from "./services/book.service";
import { CustomerService } from "./services/customer.service";
import { BorrowingService } from "./services/borrowing.service";

@NgModule({
    providers: [
        BookService,
        CustomerService,
        BorrowingService
    ]
})

export class CoreModule { }