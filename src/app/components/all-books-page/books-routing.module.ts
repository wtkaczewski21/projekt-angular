import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AllBooksPageComponent } from "./all-books-page.component";
import { BookListComponent } from "./book-list/book-list.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";

const routes: Routes = [
    {
        path: '', component: AllBooksPageComponent, children: [
            { path: '', component: BookListComponent },
            { path: 'new', component: AddBookComponent },
            { path: 'edit/:id', component: EditBookComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BooksRoutingModule { }