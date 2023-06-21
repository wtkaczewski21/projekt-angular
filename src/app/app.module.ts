import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookComponent } from './components/all-books-page/book/book.component';
import { BookService } from './services/book.service';
import { AddBookComponent } from './components/all-books-page/add-book/add-book.component';
import { BookListComponent } from './components/all-books-page/book-list/book-list.component';
import { AllBooksPageComponent } from './components/all-books-page/all-books-page.component';
import { CustomersPageComponent } from './components/customers-page/customers-page.component';
import { CustomerService } from './services/customer.service';
import { EditBookComponent } from './components/all-books-page/edit-book/edit-book.component';
import { CustomersListComponent } from './components/customers-page/customers-list/customers-list.component';
import { CustomerComponent } from './components/customers-page/customer/customer.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { BorrowingsPageComponent } from './components/borrowings-page/borrowings-page.component';
import { AddCustomerComponent } from './components/customers-page/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customers-page/edit-customer/edit-customer.component';
import { FavoriteBooksComponent } from './components/favorite-books-page/favorite-books.component';
import { FavoriteBookComponent } from './components/favorite-books-page/favorite-book/favorite-book.component';
import { BorrowingsListComponent } from './components/borrowings-page/borrowings-list/borrowings-list.component';
import { NewBorrowingComponent } from './components/borrowings-page/new-borrowing/new-borrowing.component';
import { BorrowingService } from './services/borrowing.service';
import { BorrowingComponent } from './components/borrowings-page/borrowing/borrowing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    BookListComponent,
    AllBooksPageComponent,
    AddBookComponent,
    CustomersPageComponent,
    EditBookComponent,
    CustomersListComponent,
    CustomerComponent,
    BorrowingsPageComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    FavoriteBooksComponent,
    FavoriteBookComponent,
    BorrowingsListComponent,
    NewBorrowingComponent,
    BorrowingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [BookService, CustomerService, BorrowingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
