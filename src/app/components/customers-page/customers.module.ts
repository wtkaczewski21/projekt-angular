import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CustomersRoutingModule } from "./customers-routing.module";
import { SharedModule } from "../shared/shared.module";

import { CustomersPageComponent } from "./customers-page.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CustomerComponent } from "./customer/customer.component";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { CustomerBorrowingsComponent } from "./customer-borrowings/customer-borrowings.component";
import { CustomerBookComponent } from "./customer-book/customer-book.component";
import { CustomerSearchFilterPipe } from "src/app/pipes/customer-search-filter.pipe";

@NgModule({
    declarations: [
        CustomersPageComponent,
        CustomersListComponent,
        CustomerComponent,
        AddCustomerComponent,
        EditCustomerComponent,
        CustomerBorrowingsComponent,
        CustomerBookComponent,
        CustomerSearchFilterPipe,
    ],
    imports: [RouterModule, CustomersRoutingModule, SharedModule],
})

export class CustomersModule { }