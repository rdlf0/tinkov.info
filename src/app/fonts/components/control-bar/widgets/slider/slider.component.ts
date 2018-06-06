import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material';

@Component({
    selector: 'app-control-bar-widget-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


    @Input() label: string;
    @Input() units: string;
    @Input() defaultValue: number;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;

    @Output() value = new EventEmitter<number>();

    currentValue: number;

    ngOnInit(): void {
        this.currentValue = this.defaultValue;
        this.value.emit(this.defaultValue);
    }

    updateValue(event: MatSliderChange): void {
        this.currentValue = event.value;
        this.value.emit(this.currentValue);
    }
}
