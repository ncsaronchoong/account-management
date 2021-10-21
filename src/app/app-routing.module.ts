import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path:'account', component: AccountComponent},
  { path:'product', component: ProductComponent},
  { path:'addproduct', component: AddProductComponent},
  { path: 'supplier', component: SupplierComponent },
  { path: 'addsupplier', component: AddSupplierComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
