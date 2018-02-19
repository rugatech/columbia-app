import {Injectable} from '@angular/core';

@Injectable()
export class PermissionsService {

    private _permissions: any[];

    constructor() {
        this._permissions = JSON.parse(sessionStorage.getItem('permissions'));
    }

    public hasPermission(single_permission: number) {
        return (this._permissions.indexOf(single_permission) > -1);
    }

    public hasGroupPermissions(permissions: number[]){
        const m = permissions.length;
        let i = 0, isValid: boolean = false;
        for (i = 0; i < m; i++) {
            if (this._permissions.indexOf(permissions[i]) > -1) {
                isValid = true;
                i = m;
            }
        }
        return isValid;
    }
}