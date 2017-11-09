import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ItemSelectorComponent } from './item-selector.component';
import { ItemSelectorRoutingModule } from './item-selector-routing.module';

import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
  imports: [
    ItemSelectorRoutingModule,
    FormsModule,
    CommonModule,
    NguiAutoCompleteModule
  ],
  declarations: [ ItemSelectorComponent ]
})
export class ItemSelectorModule { }
