import { AppConfig } from './AppConfig';
import { InjectionToken } from '@angular/core';
import { SliderComponent } from './fonts/components/control-bar/widgets/slider/slider.component';
import { TextAlignComponent } from './fonts/components/control-bar/widgets/text-align/text-align.component';
import { InverterComponent } from './fonts/components/control-bar/widgets/inverter/inverter.component';
import { widgets } from '../../DATA/widgets';

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
                defaultValue: widgets.fontSize.defaultValue,
                data: widgets.fontSize.params
            },
            {
                name: WIDGET_LINE_HEIGHT,
                type: SliderComponent,
                defaultValue: widgets.lineHeight.defaultValue,
                data: widgets.lineHeight.params
            },
            {
                name: WIDGET_LETTER_SPACING,
                type: SliderComponent,
                defaultValue: widgets.letterSpacing.defaultValue,
                data: widgets.letterSpacing.params
            },
            {
                name: WIDGET_TEXT_ALIGN,
                type: TextAlignComponent,
                defaultValue: widgets.textAlign.defaultValue,
                data: widgets.textAlign.params
            },
            {
                name: WIDGET_INVERTER,
                type: InverterComponent,
                defaultValue: widgets.inverter.defaultValue,
                data: widgets.inverter.params
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
