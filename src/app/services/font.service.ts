import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Font } from '../models/font';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FontService {

    private apiUrl = 'api/fonts';

    constructor(private http: HttpClient) { }

    getFonts(): Observable<Font[]> {
        return this.http.get<Font[]>(this.apiUrl);
    }
}
