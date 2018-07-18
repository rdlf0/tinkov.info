import { Font } from '../src/app/fonts/models/font';

/**
 *
 *
 * Adash, ot tuk nadolu mojesh da promenqsh
 * koqto ti syrce iska stoinost :)
 *
 *
 */

/**
 * Basic configurations
 */
export const websiteDefaultTitle = 'Tinkov';

/**
 * Fonts configuration
 */
export const fonts: Font[] = [
    {
        id: 1,
        name: 'Gilroy',
        slug: 'gilroy',
        directory: 'Gilroy',
        alternatives: [
            'sans-serif'
        ],
        styles: [
            'Thin',
            'ThinItalic',
            'UltraLight',
            'UltraLightItalic',
            'Light',
            'LightItalic',
            'Regular',
            'RegularItalic',
            'Medium',
            'MediumItalic',
            'SemiBold',
            'SemiBoldItalic',
            'Bold',
            'BoldItalic',
            'ExtraBold',
            'ExtraBoldItalic',
            'Black',
            'BlackItalic',
            'Heavy',
            'HeavyItalic',
        ],
        stylesFree: [
            'Light',
            'Regular',
            'Black'
        ],
        list: {
            preview: {
                text: 'Ladies & Gentleman',
                style: 'Light'
            }
        }
    },
    {
        id: 2,
        name: 'Ridley Grotesk',
        slug: 'ridley-grotesk',
        directory: 'RidleyGrotesk',
        alternatives: [
            'sans-serif'
        ],
        styles: [
            'Thin',
            'ThinItalic',
            'UltraLight',
            'UltraLightItalic',
            'Light',
            'LightItalic',
            'Regular',
            'Italic',
            'Medium',
            'MediumItalic',
            'SemiBold',
            'SemiBoldItalic',
            'Bold',
            'BoldItalic',
            'ExtraBold',
            'ExtraBoldItalic',
            'Black',
            'BlackItalic'
        ],
        stylesFree: [
            'Light',
            'SemiBold'
        ],
        list: {
            preview: {
                text: 'Gane/4 30.5ml',
                style: 'Regular'
            }
        }
    },
    {
        id: 3,
        name: 'Maya Script',
        slug: 'maya-script',
        directory: 'MayaScript',
        alternatives: [
            'sans-serif'
        ],
        styles: [
            'Regular',
            'Bold',
            'Ornaments'
        ],
        stylesFree: [],
        list: {
            preview: {
                text: 'Save adasha and the FOREST',
                style: 'Regular'
            }
        }
    }
];

/**
 * Control bar widgets configuration
 */
export const widgets = {
    fontSize: {
        defaultValue: 96,
        params: {
            label: 'S',
            units: 'px',
            min: 10,
            max: 120,
            step: 1
        }
    },
    lineHeight: {
        defaultValue: 100,
        params: {
            label: 'LH',
            units: 'px',
            min: 10,
            max: 140,
            step: 1
        }
    },
    letterSpacing: {
        defaultValue: 0,
        params: {
            label: 'LS',
            units: 'px',
            min: 0,
            max: 20,
            step: 1
        }
    },
    textAlign: {
        defaultValue: 'left',
        params: {}
    },
    inverter: {
        defaultValue: false,
        params: {}
    }
};
