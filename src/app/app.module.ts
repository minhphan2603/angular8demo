import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SmartphoneListModule } from './smartphone-list/smartphone-list.module';
import { LaptopListModule } from './laptop-list/laptop-list.module';
import { PromotionModule } from './promotion/promotion.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    SmartphoneListModule,
    LaptopListModule,
    PromotionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
