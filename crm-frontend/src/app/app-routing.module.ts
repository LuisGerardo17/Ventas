import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './feature/client/client.component';

const routes: Routes = [
{path:'client', component:ClientComponent},
{path:'client/:id',component:ClientComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
