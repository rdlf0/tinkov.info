import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const fonts = [
            { id: 1, name: 'Some font' },
            { id: 2, name: 'Another font' },
            { id: 3, name: 'Is this a font?' },
            { id: 4, name: 'No way!' },
            { id: 5, name: 'You should be kidding' },
            { id: 6, name: 'Atanas' },
            { id: 7, name: 'Bat Georgi' },
            { id: 8, name: 'Zadushavam sa!' },
        ];

        return { fonts };
    }

}
