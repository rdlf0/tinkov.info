import { Component, Input, OnInit } from '@angular/core';
import { WidgetUpdateService } from '../../../services/control-bar/widget-update.service';
import { WidgetResetService } from '../../../services/control-bar/widget-reset.service';

@Component({
    template: ''
})
export class AbstractWidgetComponent<T> implements OnInit {

    @Input() widgetName: string;
    @Input() defaultValue: T;
    @Input() data: any;
    currentValue: T;

    constructor(
        private widgetResetService: WidgetResetService,
        private widgetUpdateService: WidgetUpdateService<T>
    ) { }

    ngOnInit(): void {
        this.updateValue(this.defaultValue);

        this.widgetResetService.resetTrigger.subscribe(
            () => this.updateValue(this.defaultValue)
        );
    }

    updateValue(value: T): void {
        this.currentValue = value;
        this.widgetUpdateService.broadcastUpdate(this.widgetName, value);
    }

}
