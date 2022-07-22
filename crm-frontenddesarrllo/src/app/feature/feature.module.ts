import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { AcesorToolbarComponent } from './acesor/toolbar/acesor-toolbar.component';
import { FormsModule } from '@angular/forms';
import { AcesorComponent } from './acesor/form/acesor.component';
import { AcesorListComponent } from './acesor/list/acesor-list.component';
import { EquipoComboboxComponent } from './equipo/equipo-combobox/equipo-combobox.component';
import { AuthoritySearchComponent } from './authority/search/authority-search.component';


@NgModule({
  declarations: [
    AcesorComponent,
    AcesorToolbarComponent,
    AcesorListComponent,
    EquipoComboboxComponent,
    AuthoritySearchComponent

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
