import { Type } from '@angular/core';

export class Widget {
    name: string;
    type: Type<any>;
    data: { key: string, value: any }[];
}
