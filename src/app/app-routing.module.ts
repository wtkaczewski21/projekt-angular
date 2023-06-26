import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: 'all-books', pathMatch: 'full' },
    {
        path: 'all-books',
        loadChildren: () => import('./components/all-books-page/books.module').then(m => m.BooksModule)
    },
    {
        path: 'favorite-books',
        loadChildren: () => import('./components/favorite-books-page/favorites.module').then(m => m.FavoritesModule)
    },
    {
        path: 'customers',
        loadChildren: () => import('./components/customers-page/customers.module').then(m => m.CustomersModule)
    },
    {
        path: 'borrowings',
        loadChildren: () => import('./components/borrowings-page/borrowings.module').then(m => m.BorrowingsModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}