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
                data: [
                    {
                        key: 'label',
                        value: 'S'
                    },
                    {
                        key: 'units',
                        value: 'px',
                    },
                    {
                        key: 'defaultValue',
                        value: 96,
                    },
                    {
                        key: 'min',
                        value: 10,
                    },
                    {
                        key: 'max',
                        value: 120,
                    },
                    {
                        key: 'step',
                        value: 1,
                    }
                ]
            },
            {
                name: 'lineHeight',
                type: SliderComponent,
                data: [
                    {
                        key: 'label',
                        value: 'LH'
                    },
                    {
                        key: 'units',
                        value: 'px',
                    },
                    {
                        key: 'defaultValue',
                        value: 100,
                    },
                    {
                        key: 'min',
                        value: 10,
                    },
                    {
                        key: 'max',
                        value: 140,
                    },
                    {
                        key: 'step',
                        value: 1,
                    }
                ]
            },
            {
                name: 'letterSpacing',
                type: SliderComponent,
                data: [
                    {
                        key: 'label',
                        value: 'LS'
                    },
                    {
                        key: 'units',
                        value: 'px',
                    },
                    {
                        key: 'defaultValue',
                        value: 0,
                    },
                    {
                        key: 'min',
                        value: 0,
                    },
                    {
                        key: 'max',
                        value: 20,
                    },
                    {
                        key: 'step',
                        value: 1,
                    }
                ]
            },
            {
                name: 'textAlign',
                type: TextAlignComponent,
                data: [
                    {
                        key: 'defaultValue',
                        value: 'left',
                    }
                ]
            },
            {
                name: 'inverter',
                type: InverterComponent,
                data: [
                    {
                        key: 'defaultValue',
                        value: false,
                    }
                ]
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
