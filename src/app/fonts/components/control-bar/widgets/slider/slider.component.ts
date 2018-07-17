import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../widget.component';

@Component({
    selector: 'app-control-bar-widget-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent extends AbstractWidgetComponent<number> {
    @Input() data: {
        label: string,
        units: string,
        min: number,
        max: number,
        step: number
    };
}
