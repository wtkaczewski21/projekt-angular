import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AllBooksPageComponent } from './components/all-books-page/all-books-page.component';
import { BookListComponent } from "./components/all-books-page/book-list/book-list.component";
import { AddBookComponent } from './components/all-books-page/add-book/add-book.component';
import { CustomersPageComponent } from "./components/customers-page/customers-page.component";
import { EditBookComponent } from "./components/all-books-page/edit-book/edit-book.component";
import { CustomersListComponent } from "./components/customers-page/customers-list/customers-list.component";
import { BorrowingsPageComponent } from "./components/borrowings-page/borrowings-page.component";
import { AddCustomerComponent } from "./components/customers-page/add-customer/add-customer.component";
import { EditCustomerComponent } from "./components/customers-page/edit-customer/edit-customer.component";
import { FavoriteBooksComponent } from "./components/favorite-books-page/favorite-books.component";
import { BorrowingsListComponent } from "./components/borrowings-page/borrowings-list/borrowings-list.component";
import { NewBorrowingComponent } from "./components/borrowings-page/new-borrowing/new-borrowing.component";
import { CustomerBorrowingsComponent } from "./components/customers-page/customer-borrowings/customer-borrowings.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'all-books', pathMatch: 'full' },
    {
        path: 'all-books', component: AllBooksPageComponent, children: [
            { path: '', component: BookListComponent },
            { path: 'new', component: AddBookComponent },
            { path: 'edit/:id', component: EditBookComponent },
        ]
    },
    { path: 'favorite-books', component: FavoriteBooksComponent },
    {
        path: 'customers', component: CustomersPageComponent, children: [
            { path: '', component: CustomersListComponent },
            { path: 'new', component: AddCustomerComponent },
            { path: 'edit/:id', component: EditCustomerComponent },
            { path: ':id/:username/borrowed-books', component: CustomerBorrowingsComponent },
        ]
    },
    {
        path: 'borrowings', component: BorrowingsPageComponent, children: [
            { path: '', component: BorrowingsListComponent },
            { path: 'new/:id', component: NewBorrowingComponent },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}