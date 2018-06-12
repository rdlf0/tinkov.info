import { Component, OnInit } from '@angular/core';
import { FontService } from '../../services/font.service';
import { Font } from '../../models/font';
import { ControlBarService } from '../../services/control-bar.service';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css', '../../../../../DATA/all-fonts.css'],
    providers: [ControlBarService]
})
export class ListComponent implements OnInit {

    fonts: Font[];

    private backgroundInverted = false;

    constructor(
        private fontService: FontService,
        private controlBarService: ControlBarService<boolean>
    ) { }

    ngOnInit() {
        this.getFonts();

        this.controlBarService.updateValue.subscribe(
            (feed: { widget, value }) => {
                if (feed.widget === 'inverter') {
                    this.backgroundInverted = feed.value;
                }
            }
        );
    }

    getFonts(): void {
        this.fontService.getFonts().subscribe(
            fonts => this.fonts = fonts
        );
    }

}
