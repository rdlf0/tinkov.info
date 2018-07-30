import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class WidgetUpdateService<T> {

    private value = new ReplaySubject<{ widget: string, value: T }>();

    valueUpdated$ = this.value.asObservable();

    broadcastUpdate(widget: string, value: T): void {
        this.value.next({ widget: widget, value: value });
    }
}
