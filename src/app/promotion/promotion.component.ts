import { Component, OnInit } from '@angular/core';
import {PromotionData} from '../../assets/promotion-data.js';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  public PromotionData: String[] = PromotionData;
  constructor() { }

  ngOnInit() {
  }

}
