import { Font } from '../src/app/fonts/models/font';

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
