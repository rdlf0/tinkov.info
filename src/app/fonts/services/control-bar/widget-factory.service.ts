import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '../../../app.config';
import { AppConfig } from '../../../AppConfig';
import { Widget } from '../../models/widget';

@Injectable()
export class WidgetFactoryService {

    constructor(@Inject(APP_CONFIG) private config: AppConfig) { }

    getWidget(name: string): Widget {
        return this.config.controlBar.widgets.filter(widget => widget.name === name)[0];
    }
}
