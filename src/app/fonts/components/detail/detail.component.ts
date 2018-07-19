import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FontService } from '../../services/font.service';
import { Font } from '../../models/font';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WidgetUpdateService } from '../../services/control-bar/widget-update.service';

@Component({
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [WidgetUpdateService]
})
export class DetailComponent implements OnInit {

    font$: Observable<Font>;
    visibleTab = 'styles';

    constructor(
        private activatedRoute: ActivatedRoute,
        private fontService: FontService
    ) { }

    ngOnInit() {
        this.getFont();
    }

    getFont(): void {
        this.font$ = this.activatedRoute.paramMap.pipe(
            switchMap((params: ParamMap) => this.fontService.getFontByProperty('slug', params.get('slug')))
        );
    }

    showTab(tabID: string): void {
        this.visibleTab = tabID;
    }
}
