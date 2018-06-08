import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service';

@Component({
    selector: 'app-control-bar-widget-inverter',
    templateUrl: './inverter.component.html',
    styleUrls: ['./inverter.component.css']
})
export class InverterComponent implements OnInit {

    @Input() defaultValue: boolean;
    @Output() value = new EventEmitter<boolean>();

    currentValue: boolean;

    constructor(private widgetService: WidgetService) {
        widgetService.resetTrigger$.subscribe(
            () => this.updateValue(this.defaultValue)
        );
    }

    ngOnInit() {
        this.updateValue(this.defaultValue);
    }

    updateValue(value: boolean): void {
        this.currentValue = value;
        this.value.emit(this.currentValue);
    }

}
