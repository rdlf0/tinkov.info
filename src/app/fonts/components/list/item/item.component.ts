
import {filter} from 'rxjs/operators';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Font } from '../../../models/font';
import { WidgetUpdateService } from '../../../services/control-bar/widget-update.service';

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

    constructor(
        private elementRef: ElementRef,
        private widgetUpdateService: WidgetUpdateService<any>
    ) {}

    ngOnInit(): void {
        this.widgetUpdateService.valueUpdated$.pipe(
            filter(feed => this.controlBarWidgets.hasOwnProperty(feed.widget)))
            .subscribe(feed => this.controlBarWidgets[feed.widget] = feed.value);
    }

    @HostListener('document:click', ['$event.target'])
    public onOutsideClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.styleChangerVisible = false;
        }
    }

    generateFontFamily(style = this.font.list.preview.style): string {
        const fontNameClear = this.font.name.replace(' ', '');
        const fontStyle = fontNameClear + style;
        return fontStyle + ',' + this.font.alternatives.join(',');
    }
}
