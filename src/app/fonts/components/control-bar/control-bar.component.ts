import { Component } from '@angular/core';
import { WidgetService } from '../../services/control-bar/widget.service';

@Component({
    selector: 'app-fonts-control-bar',
    templateUrl: './control-bar.component.html',
    styleUrls: ['./control-bar.component.css'],
    providers: [WidgetService]
})
export class ControlBarComponent {}
