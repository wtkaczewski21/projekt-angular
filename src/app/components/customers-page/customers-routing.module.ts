import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CustomersPageComponent } from "./customers-page.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { CustomerBorrowingsComponent } from "./customer-borrowings/customer-borrowings.component";

const routes: Routes = [
    {
        path: '', component: CustomersPageComponent, children: [
            { path: '', component: CustomersListComponent },
            { path: 'new', component: AddCustomerComponent },
            { path: 'edit/:id', component: EditCustomerComponent },
            { path: ':id/:username/borrowed-books', component: CustomerBorrowingsComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomersRoutingModule { }