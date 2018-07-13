import { Widget } from './fonts/models/widget';

export class AppConfig {
    title: string;
    api: {
        endpoint: string,
        fontsPath: string
    };
    controlBar: {
        widgets: Widget[]
    };
    list: {
        controlBar: {
            widgets: string[]
        }
    };
}
