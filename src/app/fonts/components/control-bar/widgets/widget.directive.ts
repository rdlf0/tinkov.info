import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appWidgetsHost]'
})
export class WidgetDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

}
