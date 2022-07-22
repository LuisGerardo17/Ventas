import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcesorComponent } from '../feature/acesor/form/acesor.component';
import { AcesorListComponent } from '../feature/acesor/list/acesor-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'acesor-list', component: AcesorListComponent},
      {path: 'acesor-form', component: AcesorComponent},
      {path: 'acesor-form/:id', component: AcesorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

