import { InMemoryDbService } from 'angular-in-memory-web-api';
import { fonts } from '../../../../DATA/config';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { fonts };
    }

}
