import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WidgetService {

    resetTrigger = new Subject();

    triggerReset(): void {
        this.resetTrigger.next();
    }
}
