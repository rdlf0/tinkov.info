import { Type } from '@angular/core';

export class Widget {
    name: string;
    type: Type<any>;
    defaultValue: string | number | boolean;
    data: any;
}
