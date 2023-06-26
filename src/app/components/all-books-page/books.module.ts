import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BooksRoutingModule } from "./books-routing.module";
import { SharedModule } from "../shared/shared.module";

import { AllBooksPageComponent } from "./all-books-page.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookComponent } from "./book/book.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { BookSearchFilterPipe } from "src/app/pipes/book-search-filter.pipe";

@NgModule({
    declarations: [
        AllBooksPageComponent,
        BookListComponent,
        BookComponent,
        AddBookComponent,
        EditBookComponent,
        BookSearchFilterPipe,
    ],
    imports: [RouterModule, BooksRoutingModule, SharedModule],
})
export class BooksModule { }