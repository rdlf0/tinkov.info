import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service';

@Component({
    selector: 'app-control-bar-widget-text-align',
    templateUrl: './text-align.component.html',
    styleUrls: ['./text-align.component.css']
})
export class TextAlignComponent implements OnInit {

    @Input() defaultValue: string;
    @Output() value = new EventEmitter<string>();

    currentValue: string = this.defaultValue;

    constructor(private widgetService: WidgetService) {
        widgetService.resetTrigger$.subscribe(
            () => this.updateValue(this.defaultValue)
        );
    }

    ngOnInit(): void {
        this.updateValue(this.defaultValue);
    }

    updateValue(value: string): void {
        this.currentValue = value;
        this.value.emit(this.currentValue);
    }

}
