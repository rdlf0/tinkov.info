import { Component } from '@angular/core';

@Component({
    selector: 'app-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent {

    fontSize: number;
    lineHeight: number;

    handleFontSize(value: number): void {
        this.fontSize = value;
    }

    handleLineHeight(value: number): void {
        this.lineHeight = value;
    }

}
