import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.scss']
})
export class LaptopItemComponent implements OnInit {

  @Input() item: {
    img: string,
    name: string,
    desc: string
  };
  constructor() { }

  ngOnInit() {
  }

}
