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
import { CustomersListComponent } from './components/customers-page/customers-list/customers-list.component';
import { CustomerComponent } from './components/customers-page/customer/customer.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

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
    CustomersListComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [BookStoreService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
