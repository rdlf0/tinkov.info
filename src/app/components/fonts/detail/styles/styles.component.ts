import { Component, Input } from '@angular/core';
import { Font } from '../../../../models/font';

@Component({
    selector: 'app-font-detail-styles',
    templateUrl: './styles.component.html',
    styleUrls: ['./styles.component.css']
})
export class StylesComponent {
    @Input() font: Font;
}
