import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSelectorComponent } from './item-selector.component';

const routes: Routes = [
  {
    path: '',
    component: ItemSelectorComponent,
    data: {
      title: 'Item Selector'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemSelectorRoutingModule { }
