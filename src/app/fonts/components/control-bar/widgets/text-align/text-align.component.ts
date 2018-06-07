import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-control-bar-widget-text-align',
    templateUrl: './text-align.component.html',
    styleUrls: ['./text-align.component.css']
})
export class TextAlignComponent implements OnInit {

    @Input() defaultValue: string;
    @Output() value = new EventEmitter<string>();

    currentValue: string = this.defaultValue;

    ngOnInit(): void {
        // this.updateValue(this.defaultValue);
        this.currentValue = this.defaultValue;
        this.value.emit(this.currentValue);
    }

    updateValue(value: string): void {
        this.currentValue = value;
        this.value.emit(this.currentValue);
    }

}
