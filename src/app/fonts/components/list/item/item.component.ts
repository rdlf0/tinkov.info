import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Font } from '../../../models/font';
import { ControlBarService } from '../../../services/control-bar.service';

@Component({
    selector: 'app-fonts-list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() font: Font;

    controlBarWidgets = {
        fontSize: 0,
        lineHeight: 0,
        letterSpacing: 0,
        textAlign: ''
    };

    styleChangerVisible = false;

    @HostListener('document:click', ['$event.target'])
    public onOutsideClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.styleChangerVisible = false;
        }
    }

    constructor(
        private elementRef: ElementRef,
        private controlBarService: ControlBarService<any>
    ) {}

    ngOnInit(): void {
        this.controlBarService.updateValue.subscribe(
            (feed: { widget, value }) => {
                if (this.controlBarWidgets.hasOwnProperty(feed.widget)) {
                    this.controlBarWidgets[feed.widget] = feed.value;
                }
            }
        );
    }

    generateFontFamily(style = this.font.list.preview.style): string {
        const fontNameClear = this.font.name.replace(' ', '');
        const fontStyle = fontNameClear + style;
        return fontStyle + ',' + this.font.alternatives.join(',');
    }
}
