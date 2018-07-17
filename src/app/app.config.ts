import { AppConfig } from './AppConfig';
import { InjectionToken } from '@angular/core';
import { SliderComponent } from './fonts/components/control-bar/widgets/slider/slider.component';
import { TextAlignComponent } from './fonts/components/control-bar/widgets/text-align/text-align.component';
import { InverterComponent } from './fonts/components/control-bar/widgets/inverter/inverter.component';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_DI_CONFIG: AppConfig = {
    title: 'Tinkov',
    api: {
        endpoint: 'api',
        fontsPath: 'fonts'
    },
    controlBar: {
        widgets: [
            {
                name: 'fontSize',
                type: SliderComponent,
                defaultValue: 96,
                data: {
                    label: 'S',
                    units: 'px',
                    min: 10,
                    max: 120,
                    step: 1
                }
            },
            {
                name: 'lineHeight',
                type: SliderComponent,
                defaultValue: 100,
                data: {
                    label: 'LH',
                    units: 'px',
                    min: 10,
                    max: 140,
                    step: 1
                }
            },
            {
                name: 'letterSpacing',
                type: SliderComponent,
                defaultValue: 0,
                data: {
                    label: 'LS',
                    units: 'px',
                    min: 0,
                    max: 20,
                    step: 1
                }
            },
            {
                name: 'textAlign',
                type: TextAlignComponent,
                defaultValue: 'left',
                data: {}
            },
            {
                name: 'inverter',
                type: InverterComponent,
                defaultValue: false,
                data: {}
            }
        ]
    },
    list: {
        controlBar: {
            widgets: [
                'fontSize',
                'lineHeight',
                'letterSpacing',
                'textAlign',
                'inverter'
            ],
            resetter: true
        }
    }
};
