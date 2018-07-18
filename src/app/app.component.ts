import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_CONFIG } from './app.config';
import { AppConfig } from './AppConfig';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    now = Date.now();

    constructor(
        private titleService: Title,
        @Inject(APP_CONFIG) private config: AppConfig
    ) {}

    ngOnInit(): void {
        this.titleService.setTitle(this.config.title);
    }

}
