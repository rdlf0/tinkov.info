import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetService } from '../../../services/widget.service';

@Component({
    template: ''
})
export class AbstractWidgetComponent<T> implements OnInit {

    @Input() defaultValue: T;
    @Output() value = new EventEmitter<T>();
    currentValue: T;

    constructor(private widgetService: WidgetService) {
        widgetService.resetTrigger$.subscribe(
            () => this.updateValue(this.defaultValue)
        );
    }

    ngOnInit(): void {
        this.updateValue(this.defaultValue);
    }

    updateValue(value: T): void {
        this.currentValue = value;
        this.value.emit(this.currentValue);
    }

}
