import { Component, Inject, OnInit } from '@angular/core';
import { FontService } from '../../services/font.service';
import { Font } from '../../models/font';
import { WidgetUpdateService } from '../../services/control-bar/widget-update.service';
import { APP_CONFIG, WIDGET_INVERTER } from '../../../app.config';
import { AppConfig } from '../../../AppConfig';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css', '../../../../../DATA/all-fonts.css'],
    providers: [WidgetUpdateService]
})
export class ListComponent implements OnInit {

    fonts: Font[];
    controlBarWidgets: string[];
    controlBarResetter: boolean;
    backgroundInverted = false;

    constructor(
        private fontService: FontService,
        private widgetUpdateService: WidgetUpdateService<boolean>,
        @Inject(APP_CONFIG) private config: AppConfig
    ) {
        this.controlBarWidgets = config.list.controlBar.widgets;
        this.controlBarResetter = config.list.controlBar.resetter;
    }

    ngOnInit() {
        this.getFonts();

        this.widgetUpdateService.valueUpdated$
            .filter(feed => feed.widget === WIDGET_INVERTER)
            .subscribe(feed => this.backgroundInverted = feed.value);
    }

    getFonts(): void {
        this.fontService.getFonts().subscribe(
            fonts => this.fonts = fonts
        );
    }

}
