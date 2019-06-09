import { Component, OnInit } from '@angular/core';
import {SmartphoneData} from '../../assets/smartphone-data'

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.scss']
})
export class SmartphoneListComponent implements OnInit {

  public SmartphoneData: Object[] = SmartphoneData;

  constructor() { }

  ngOnInit() {
  }

}
