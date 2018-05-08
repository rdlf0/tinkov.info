import { Component, OnInit } from '@angular/core';
import { FontService } from '../../../services/font.service';
import { Font } from '../../../models/font';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    fonts: Font[];

    constructor(private fontService: FontService) { }

    ngOnInit() {
        this.getFonts();
    }

    getFonts(): void {
        this.fontService.getFonts().subscribe(
            fonts => this.fonts = fonts
        );
    }

}
