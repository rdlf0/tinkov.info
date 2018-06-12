import { Component } from '@angular/core';
import { WidgetService } from '../../../../services/control-bar/widget.service';

@Component({
    selector: 'app-control-bar-widget-resetter',
    templateUrl: './resetter.component.html',
    styleUrls: ['./resetter.component.css']
})
export class ResetterComponent {

    constructor(private widgetService: WidgetService) {}

    reset() {
        this.widgetService.triggerReset();
    }
}
