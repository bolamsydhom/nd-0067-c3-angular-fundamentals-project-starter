import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationCardComponent } from './components/confirmation-card/confirmation-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ProductListComponent},
  {path: 'product/:id', component: ProductItemDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'confirm-order', component: ConfirmationCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
