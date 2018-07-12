export class AppConfig {
    title: string;
    api: {
        endpoint: string
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
