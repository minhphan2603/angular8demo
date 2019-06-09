import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopListComponent } from './laptop-list.component';
import { LaptopItemComponent } from './laptop-item/laptop-item.component';


@NgModule({
  declarations: [LaptopListComponent, LaptopItemComponent],
  exports: [LaptopListComponent, LaptopItemComponent],
  imports: [
    CommonModule
  ]
})
export class LaptopListModule { }
