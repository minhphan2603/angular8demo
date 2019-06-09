import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { PromotionItemComponent } from './promotion-item/promotion-item.component';


@NgModule({
  declarations: [PromotionComponent, PromotionItemComponent],
  exports: [PromotionComponent],
  imports: [
    CommonModule
  ]
})
export class PromotionModule { }
