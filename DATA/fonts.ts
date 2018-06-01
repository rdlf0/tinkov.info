import { Font } from '../src/app/fonts/models/font';

export const fonts: Font[] = [
    {
        id: 1,
        name: 'Gilroy',
        slug: 'gilroy',
        directory: 'Gilroy',
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
                weight: 300,
                style: 'normal'
            }
        }
    }
];
