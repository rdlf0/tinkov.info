import { Component } from '@angular/core';

@Component({
    selector: 'app-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent {

    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    textAlign: string;
    invertColors: boolean;

    handleFontSize(value: number): void {
        this.fontSize = value;
    }

    handleLineHeight(value: number): void {
        this.lineHeight = value;
    }

    handleLetterSpacing(value: number): void {
        this.letterSpacing = value;
    }

    handleTextAlign(value: string): void {
        this.textAlign = value;
    }

    handleInvertColors(value: boolean): void {
        this.invertColors = value;
    }
}
