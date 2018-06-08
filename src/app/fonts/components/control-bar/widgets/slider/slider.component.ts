import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service';

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

    constructor(private widgetService: WidgetService) {
        widgetService.resetTrigger$.subscribe(
            () => this.updateValue(this.defaultValue)
        );
    }

    ngOnInit(): void {
        this.updateValue(this.defaultValue);
    }

    updateValue(value: number): void {
        this.currentValue = value;
        this.value.emit(this.currentValue);
    }
}
