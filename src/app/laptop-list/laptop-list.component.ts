import { Component, OnInit } from '@angular/core';
import {LaptopData} from '../../assets/laptop-data.js';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent implements OnInit {

  public LaptopData = LaptopData;
  constructor() { }

  ngOnInit() {
  }

}
