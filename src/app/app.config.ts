import { AppConfig } from './AppConfig';
import { InjectionToken } from '@angular/core';

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
                type: 'slider',
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
            ]
        }
    }
};
