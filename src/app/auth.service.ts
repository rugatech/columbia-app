import {PermissionsService} from './permissions.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    authorized = false;

    constructor(public permissions: PermissionsService){}

    isAuthenticated(roles: Array<number>) {
        const m = roles.length;
        for (let i = 0; i < m; i++) {
            if (this.permissions.hasPermission(roles[i])) {
                this.authorized = true;
                break;
            }
        }
        return this.authorized;
    }
}