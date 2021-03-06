import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '../feature/client/form/client.component';
import { ClientListComponent } from '../feature/client/list/client-list.component';

import { ProductComponent } from '../feature/products/form/product.component';
import { ProductListComponent } from '../feature/products/list/product-list.component';

import { AcesorComponent } from '../feature/acesor/form/acesor.component';
import { AcesorListComponent } from '../feature/acesor/list/acesor-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'client-list', component: ClientListComponent},
      {path: 'client', component: ClientComponent},
      {path: 'client/:id', component: ClientComponent},
      {path: 'acesor-list', component: AcesorListComponent},
      {path: 'acesor', component: AcesorComponent},
      {path: 'acesor/:id', component: AcesorComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: 'product', component: ProductComponent},
      {path: 'product/:id', component: ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

