import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FavoritesRoutingModule } from "./favorites-routing.module";
import { SharedModule } from "../shared/shared.module";

import { FavoriteBooksComponent } from "./favorite-books.component";
import { FavoriteBookComponent } from "./favorite-book/favorite-book.component";

@NgModule({
    declarations: [
        FavoriteBooksComponent,
        FavoriteBookComponent,
    ],
    imports: [RouterModule, FavoritesRoutingModule, SharedModule],
})
export class FavoritesModule { }