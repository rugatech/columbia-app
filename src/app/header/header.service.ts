import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HeaderService {
    loggedInSubject = new Subject();
    programTitleSubject = new Subject();

    constructor() {}
}