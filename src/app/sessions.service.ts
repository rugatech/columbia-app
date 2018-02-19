import {Injectable} from '@angular/core';

@Injectable()
export class SessionsService {

    constructor() {
    }

    getSessionItem(item: string) {
        return sessionStorage.getItem(item);
    }

    setSessionItem(item_name: string, item_data: string) {

    }
}
