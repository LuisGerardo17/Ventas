import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { ClientToolbarComponent} from './client/toolbar/client-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client/form/client.component';
import { ClientListComponent } from './client/list/client-list.component';
import { AcesorComboboxComponent } from './acesor/acesor-combobox/acesor-combobox.component';
import { ProductSearchComponent } from './products/search/product-search.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientToolbarComponent,
    ClientListComponent,
    AcesorComboboxComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
