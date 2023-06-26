import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BorrowingsRoutingModule } from "./borrowings-routing.module";
import { SharedModule } from "../shared/shared.module";

import { BorrowingsPageComponent } from "./borrowings-page.component";
import { BorrowingsListComponent } from "./borrowings-list/borrowings-list.component";
import { BorrowingComponent } from "./borrowing/borrowing.component";
import { NewBorrowingComponent } from "./new-borrowing/new-borrowing.component";



@NgModule({
    declarations: [
        BorrowingsPageComponent,
        BorrowingsListComponent,
        BorrowingComponent,
        NewBorrowingComponent,
    ],
    imports: [RouterModule, BorrowingsRoutingModule, SharedModule],
})
export class BorrowingsModule { }