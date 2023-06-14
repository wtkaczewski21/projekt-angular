import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { AllBooksPageComponent } from './components/all-books-page/all-books-page.component';
import { BookListComponent } from "./components/all-books-page/book-list/book-list.component";
import { AddBookComponent } from './components/all-books-page/add-book/add-book.component';

const appRoutes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    {
        path: 'all-books', component: AllBooksPageComponent, children: [
            { path: '', component: BookListComponent },
            { path: 'new', component: AddBookComponent },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}