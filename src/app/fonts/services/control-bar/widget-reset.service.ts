import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WidgetResetService {

    private trigger = new Subject();

    resetTriggered$ = this.trigger.asObservable();

    triggerReset(): void {
        this.trigger.next();
    }
}
