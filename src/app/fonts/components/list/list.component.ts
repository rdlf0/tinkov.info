import { Component, Inject, OnInit } from '@angular/core';
import { FontService } from '../../services/font.service';
import { Font } from '../../models/font';
import { ControlBarService } from '../../services/control-bar.service';
import { APP_CONFIG } from '../../../app.config';
import { AppConfig } from '../../../AppConfig';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css', '../../../../../DATA/all-fonts.css'],
    providers: [ControlBarService]
})
export class ListComponent implements OnInit {

    fonts: Font[];
    controlBarWidgets: string[];
    controlBarResetter: boolean;
    backgroundInverted = false;

    constructor(
        private fontService: FontService,
        private controlBarService: ControlBarService<boolean>,
        @Inject(APP_CONFIG) private config: AppConfig
    ) {
        this.controlBarWidgets = config.list.controlBar.widgets;
        this.controlBarResetter = config.list.controlBar.resetter;
    }

    ngOnInit() {
        this.getFonts();

        this.controlBarService.updateValue
            .filter(feed => feed.widget === 'inverter')
            .subscribe(feed => this.backgroundInverted = feed.value);
    }

    getFonts(): void {
        this.fontService.getFonts().subscribe(
            fonts => this.fonts = fonts
        );
    }

}
