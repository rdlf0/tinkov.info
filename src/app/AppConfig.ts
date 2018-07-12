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

class Widget {
    name: string;
    type: string;
    data: { key: string, value: any }[];
}
