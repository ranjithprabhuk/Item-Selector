import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ItemSelectorComponent } from './item-selector.component';
import { ItemSelectorRoutingModule } from './item-selector-routing.module';

@NgModule({
  imports: [
    ItemSelectorRoutingModule,
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  declarations: [ ItemSelectorComponent ]
})
export class ItemSelectorModule { }
