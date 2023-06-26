import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BorrowingsPageComponent } from "./borrowings-page.component";
import { BorrowingsListComponent } from "./borrowings-list/borrowings-list.component";
import { NewBorrowingComponent } from "./new-borrowing/new-borrowing.component";

const routes: Routes = [
    {
        path: '', component: BorrowingsPageComponent, children: [
            { path: '', component: BorrowingsListComponent },
            { path: 'new/:id', component: NewBorrowingComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BorrowingsRoutingModule { }