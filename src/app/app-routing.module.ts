import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { ProductComponent } from './Component/product/product.component';

const routes: Routes = [
  // {path:'',component:NavBarComponent},
  {path:'',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
