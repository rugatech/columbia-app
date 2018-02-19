import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor (private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const roles = route.data['permissions'] as Array<number>;
        if (this.authService.isAuthenticated(roles)) {
            return true;
        } else {
            this.router.navigate(['/']);
            console.log('Guard Failed');
        }
    }
}