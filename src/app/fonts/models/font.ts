export class Font {
    id: number;
    name: string;
    slug: string;
    directory: string;
    alternatives: string[];
    styles: string[];
    stylesFree: string[];
    list: {
        preview: {
            text: string;
            style: string;
        }
    };
}
