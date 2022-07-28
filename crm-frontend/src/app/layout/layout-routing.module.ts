import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '../feature/client/form/client.component';
import { ClientListComponent } from '../feature/client/list/client-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'client-list', component: ClientListComponent},
      {path: 'client-form', component: ClientComponent},
      {path: 'client-form/:id', component: ClientComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
