import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Font } from '../models/font';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FontService {

    private apiUrl = 'api/fonts';

    constructor(private http: HttpClient) { }

    getFonts(): Observable<Font[]> {
        return this.http.get<Font[]>(this.apiUrl);
    }

    getFont(id: number): Observable<Font> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Font>(url);
    }

    getFontByProperty(property: string, value: string): Observable<Font> {
        const url = `${this.apiUrl}/?${property}=${value}`;
        return this.http.get<Font>(url).map(fonts => fonts[0]);
    }
}
