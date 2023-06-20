import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { AllBooksPageComponent } from './components/all-books-page/all-books-page.component';
import { BookListComponent } from "./components/all-books-page/book-list/book-list.component";
import { AddBookComponent } from './components/all-books-page/add-book/add-book.component';
import { CustomersPageComponent } from "./components/customers-page/customers-page.component";
import { EditBookComponent } from "./components/all-books-page/edit-book/edit-book.component";
import { CustomersListComponent } from "./components/customers-page/customers-list/customers-list.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'all-books', component: AllBooksPageComponent, children: [
            { path: '', component: BookListComponent },
            { path: 'new', component: AddBookComponent },
            { path: 'edit/:id', component: EditBookComponent },
        ]
    },
    {
        path: 'customers', component: CustomersPageComponent, children: [
            { path: '', component: CustomersListComponent },
            // { path: 'new', component: AddCustomerComponent },
            // { path: 'edit/:id', component: EditCustomerComponent },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}