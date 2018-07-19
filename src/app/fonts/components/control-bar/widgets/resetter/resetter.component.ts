import { Component } from '@angular/core';
import { WidgetResetService } from '../../../../services/control-bar/widget-reset.service';

@Component({
    selector: 'app-control-bar-widget-resetter',
    templateUrl: './resetter.component.html',
    styleUrls: ['./resetter.component.css']
})
export class ResetterComponent {

    constructor(private widgetResetService: WidgetResetService) {}

    reset() {
        this.widgetResetService.triggerReset();
    }
}
