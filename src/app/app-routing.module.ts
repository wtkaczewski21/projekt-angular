import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { AllBooksPageComponent } from './components/all-books-page/all-books-page.component';
import { BookListComponent } from "./components/all-books-page/book-list/book-list.component";
import { AddBookComponent } from './components/all-books-page/add-book/add-book.component';
import { CustomersPageComponent } from "./components/customers-page/customers-page.component";
import { EditBookComponent } from "./components/all-books-page/edit-book/edit-book.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    {
        path: 'all-books', component: AllBooksPageComponent, children: [
            { path: '', component: BookListComponent },
            { path: 'new', component: AddBookComponent },
            { path: 'edit/:id', component: EditBookComponent },
        ]
    },
    { path: 'customers', component: CustomersPageComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}