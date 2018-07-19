import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class WidgetUpdateService<T> {

    updateValue = new ReplaySubject<{ widget: string, value: T }>();

    broadcastUpdate(widget: string, value: T): void {
        this.updateValue.next({ widget: widget, value: value });
    }
}
