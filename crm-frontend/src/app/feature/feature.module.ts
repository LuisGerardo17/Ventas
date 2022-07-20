import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { AcesorToolbarComponent } from './acesor/toolbar/acesor-toolbar.component';
import { FormsModule } from '@angular/forms';
import { AcesorComponent } from './acesor/form/acesor.component';
import { AcesorListComponent } from './acesor/list/acesor-list.component';


@NgModule({
  declarations: [
    AcesorComponent,
    AcesorToolbarComponent,
    AcesorListComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
