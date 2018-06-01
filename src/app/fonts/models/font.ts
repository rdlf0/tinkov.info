export class Font {
    id: number;
    name: string;
    slug: string;
    directory: string;
    styles: string[];
    stylesFree: string[];
    list: {
        preview: {
            text: string;
            transform: string;
            weight: number | string;
            style: string;
        }
    };
}
