import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Font } from '../../../models/font';
import { ControlBarComponent } from '../../control-bar/control-bar.component';

@Component({
    selector: 'app-fonts-list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {

    @Input() font: Font;
    @Input() controlBar: ControlBarComponent;

    styleChangerVisible = false;

    @HostListener('document:click', ['$event.target'])
    public onOutsideClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.styleChangerVisible = false;
        }
    }

    constructor(
        private elementRef: ElementRef
    ) {}
}
