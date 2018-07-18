import { AppConfig } from './AppConfig';
import { InjectionToken } from '@angular/core';
import { SliderComponent } from './fonts/components/control-bar/widgets/slider/slider.component';
import { TextAlignComponent } from './fonts/components/control-bar/widgets/text-align/text-align.component';
import { InverterComponent } from './fonts/components/control-bar/widgets/inverter/inverter.component';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const WIDGET_FONT_SIZE = 'fontSize';
export const WIDGET_LINE_HEIGHT = 'lineHeight';
export const WIDGET_LETTER_SPACING = 'letterSpacing';
export const WIDGET_TEXT_ALIGN = 'textAlign';
export const WIDGET_INVERTER = 'inverter';

export const APP_DI_CONFIG: AppConfig = {
    title: 'Tinkov',
    api: {
        endpoint: 'api',
        fontsPath: 'fonts'
    },
    controlBar: {
        widgets: [
            {
                name: WIDGET_FONT_SIZE,
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
                name: WIDGET_LINE_HEIGHT,
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
                name: WIDGET_LETTER_SPACING,
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
                name: WIDGET_TEXT_ALIGN,
                type: TextAlignComponent,
                defaultValue: 'left',
                data: {}
            },
            {
                name: WIDGET_INVERTER,
                type: InverterComponent,
                defaultValue: false,
                data: {}
            }
        ]
    },
    list: {
        controlBar: {
            widgets: [
                WIDGET_FONT_SIZE,
                WIDGET_LINE_HEIGHT,
                WIDGET_LETTER_SPACING,
                WIDGET_TEXT_ALIGN,
                WIDGET_INVERTER
            ],
            resetter: true
        }
    }
};
