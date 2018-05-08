import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit {

    fontSize = 22;

    constructor() { }

    ngOnInit() {
    }

    fontUp(): void {
        this.fontSize++;
    }

    fontDown(): void {
        this.fontSize--;
    }
}
