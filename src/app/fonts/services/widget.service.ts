import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WidgetService {

  private resetTrigger = new Subject();

  resetTrigger$ = this.resetTrigger.asObservable();

  triggerReset(): void {
      this.resetTrigger.next();
  }

}
