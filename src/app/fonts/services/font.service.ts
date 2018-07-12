import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Font } from '../models/font';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../AppConfig';
import { APP_CONFIG } from '../../app.config';

@Injectable()
export class FontService implements OnInit {

    readonly fontsApiUrl: string;

    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: HttpClient
    ) {
        this.fontsApiUrl = `${config.api.endpoint}/${config.api.fontsPath}`;
    }

    ngOnInit(): void {}

    getFonts(): Observable<Font[]> {
        return this.http.get<Font[]>(this.fontsApiUrl);
    }

    getFont(id: number): Observable<Font> {
        const url = `${this.fontsApiUrl}/${id}`;
        return this.http.get<Font>(url);
    }

    getFontByProperty(property: string, value: string): Observable<Font> {
        const url = `${this.fontsApiUrl}/?${property}=${value}`;
        return this.http.get<Font>(url).map(fonts => fonts[0]);
    }
}
