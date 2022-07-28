import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { ClientToolbarComponent} from './client/toolbar/client-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client/form/client.component';
import { ClientListComponent } from './client/list/client-list.component';
import { AcesorComboboxComponent } from './acesor/acesor-combobox/acesor-combobox.component';
import { ProductSearchComponent } from './products/search/product-search.component';
import { AcesorToolbarComponent } from './acesor/toolbar/acesor-toolbar.component';
import { AcesorComponent } from './acesor/form/acesor.component';
import { AcesorListComponent } from './acesor/list/acesor-list.component';
import { EquipoComboboxComponent } from './equipo/equipo-combobox/equipo-combobox.component';
import { AuthoritySearchComponent } from './authority/search/authority-search.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { ClientSearchComponent } from './client/search/client-search.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientToolbarComponent,
    ClientListComponent,
    AcesorComboboxComponent,
    ProductSearchComponent,
    AcesorComponent,
    AcesorToolbarComponent,
    AcesorListComponent,
    EquipoComboboxComponent,
    AuthoritySearchComponent,
    PersonComboboxComponent,
    ClientSearchComponent
],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
