import { Component } from '@angular/core';
import { AbstractWidgetComponent } from '../widget.component';

@Component({
    selector: 'app-control-bar-widget-text-align',
    templateUrl: './text-align.component.html',
    styleUrls: ['./text-align.component.css']
})
export class TextAlignComponent extends AbstractWidgetComponent<string> {}
