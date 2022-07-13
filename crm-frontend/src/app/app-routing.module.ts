import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './feature/client/client.component';
import { AcesorComponent } from './feature/acesor/acesor.component';
import { ProductComponent } from './feature/products/product.component';

const routes: Routes = [
{path:'client', component:ClientComponent},
{path:'client/:id',component:ClientComponent},
{path:'acesor', component:AcesorComponent},
{path:'acesor/:id',component:AcesorComponent},
{path:'product', component:ProductComponent},
{path:'product/:id',component:ProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
