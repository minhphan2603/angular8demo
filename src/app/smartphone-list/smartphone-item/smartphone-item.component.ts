import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
    selector: 'app-smartphone-item',
    templateUrl: './smartphone-item.component.html',
    styleUrls: ['./smartphone-item.component.scss']
})
export class SmartphoneItemComponent implements OnInit {

    @Input() item: {
        img: string,
        name: string,
        desc: string
    };

    constructor() { }

    ngOnInit() {
    }

}
