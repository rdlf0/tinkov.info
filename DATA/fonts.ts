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
                transform: 'uppercase',
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
                transform: 'none',
                style: 'Regular'
            }
        }
    }
];
