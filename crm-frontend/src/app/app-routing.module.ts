import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcesorComponent } from './feature/acesor/acesor.component';

const routes: Routes = [
{path:'acesor', component:AcesorComponent},
{path:'acesor/:id',component:AcesorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
