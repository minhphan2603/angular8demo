import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartphoneListComponent } from './smartphone-list.component';
import { SmartphoneItemComponent } from './smartphone-item/smartphone-item.component';

@NgModule({
  declarations: [SmartphoneListComponent, SmartphoneItemComponent],
  exports: [SmartphoneListComponent, SmartphoneItemComponent],
  imports: [
    CommonModule
  ]
})
export class SmartphoneListModule { }
