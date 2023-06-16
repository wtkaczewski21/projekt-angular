import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PopularBookComponent } from './components/popular-book/popular-book.component';
import { BookComponent } from './components/all-books-page/book/book.component';
import { BookStoreService } from './dom-service/store/book-store.service';
import { AddBookComponent } from './components/all-books-page/add-book/add-book.component';
import { BookListComponent } from './components/all-books-page/book-list/book-list.component';
import { AllBooksPageComponent } from './components/all-books-page/all-books-page.component';
import { CustomersPageComponent } from './components/customers-page/customers-page.component';
import { CustomerService } from './dom-service/customer.service';
import { EditBookComponent } from './components/all-books-page/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PopularBookComponent,
    BookComponent,
    BookListComponent,
    AllBooksPageComponent,
    AddBookComponent,
    CustomersPageComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BookStoreService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
