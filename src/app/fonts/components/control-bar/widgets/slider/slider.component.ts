import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../widget.component';

@Component({
    selector: 'app-control-bar-widget-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent extends AbstractWidgetComponent<number> {

    @Input() label: string;
    @Input() units: string;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
}
