import { Component, Input, OnInit } from '@angular/core';
import { ControlBarService } from '../../../services/control-bar.service';
import { WidgetService } from '../../../services/control-bar/widget.service';

@Component({
    template: ''
})
export class AbstractWidgetComponent<T> implements OnInit {

    @Input() widgetName: string;
    @Input() defaultValue: T;
    @Input() data: any;
    currentValue: T;

    constructor(
        private widgetService: WidgetService,
        private controlBarService: ControlBarService<T>
    ) { }

    ngOnInit(): void {
        this.updateValue(this.defaultValue);

        this.widgetService.resetTrigger.subscribe(
            () => this.updateValue(this.defaultValue)
        );
    }

    updateValue(value: T): void {
        this.currentValue = value;
        this.controlBarService.broadcastUpdate(this.widgetName, value);
    }

}
