import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontService } from '../../../services/font.service';
import { Font } from '../../../models/font';

@Component({
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    font: Font;
    visibleTab = 'styles';

    constructor(
        private route: ActivatedRoute,
        private fontService: FontService
    ) { }

    ngOnInit() {
        this.getFont();
    }

    getFont(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.fontService.getFont(id).subscribe(
            font => this.font = font
        );
    }

    showTab(tabID: string): void {
        this.visibleTab = tabID;
    }
}
