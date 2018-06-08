import { Component } from '@angular/core';
import { AbstractWidgetComponent } from '../widget.component';

@Component({
    selector: 'app-control-bar-widget-inverter',
    templateUrl: './inverter.component.html',
    styleUrls: ['./inverter.component.css']
})
export class InverterComponent extends AbstractWidgetComponent<boolean> {}
