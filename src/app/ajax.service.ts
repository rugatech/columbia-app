import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Observable';
import {Observable} from 'rxjs/Observable';
import {URLSearchParams} from '@angular/http';
import {environment} from '../environments/environment';

@Injectable()
export class AjaxService {
    // private _apiUrl: String = environment.apiUrl + '/';
    private _apiUrl: String = '';
    private _apiToken: String = '';
    public _headers: Headers;

    constructor(private http: Http) {
    }

    setApiToken(token: string){
        sessionStorage.setItem('jwtToken', token);
    }

    getApiToken() {
        if (!this._apiToken) {
            this._apiToken = sessionStorage.getItem('jwtToken');
            if (this._apiToken) {
                this._apiToken = this._apiToken.replace(/[\n\r]+/g, '');
                const bearer = 'Bearer ' + this._apiToken;
                this._headers = new Headers({'Authorization': bearer});
            }
        }
    }

    getDirectLink(inner_link: string){
        this.getApiToken();
        return (this._apiUrl + inner_link + '?token=' + this._apiToken);
    }

    search(route, data) {
        this.getApiToken();
        const params: URLSearchParams = new URLSearchParams();
        for (const v in data) {
            if (data[v] !== '') {
                params.set(v, data[v]);
            }
        }
        return this.http.get(this._apiUrl + route, {headers: this._headers, params: params})
            .map(
                (response: Response) => {
                    return response.json();
                }
            )
            .catch(
                (error: Response) => {
                    let errmsg = error.statusText;
                    try {
                        const body = error.json();
                        errmsg = body['error'];
                    }
                    catch (Exception) {}
                    if (!errmsg) {errmsg = 'Internal Server Error'}
                    return Observable.throw(errmsg);
                }
            );
    }

    get(route) {
        this.getApiToken();
        return this.http.get(this._apiUrl + route, {headers: this._headers})
            .map(
                (response: Response) => {
                    return response.json();
                }
            )
            .catch(
                (error: Response) => {
                    let errmsg = error.statusText;
                    try {
                        const body = error.json();
                        errmsg = body['error'];
                    }
                    catch (Exception) {}
                    if (!errmsg) { errmsg = 'Internal Server Error'; }
                    return Observable.throw(errmsg);
                }
            );
    }

    post(route, data) {
        this.getApiToken();
        return this.http.post(this._apiUrl + route, data, {headers: this._headers})
            .map(
                (response: Response) => {
                    return response.json();
                }
            )
            .catch(
                (error: Response) => {
                    let errmsg = error.statusText;
                    try{
                        const body = error.json();
                        errmsg = body['error'];
                    }
                    catch (Exception) {}
                    if (!errmsg) {errmsg = 'Internal Server Error'}
                    return Observable.throw(errmsg);
                }
            );
    }

    put(route, data) {
        this.getApiToken();
        return this.http.put(this._apiUrl + route, data, {headers: this._headers })
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    let errmsg = error.statusText;
                    try {
                        const body = error.json();
                        errmsg = body['error'];
                    }
                    catch (Exception) {}
                    if (!errmsg){
                        errmsg = 'Internal Server Error';
                    }
                    return Observable.throw(errmsg);
                }
            )
    }

    delete(route) {
        this.getApiToken();
        return this.http.delete(this._apiUrl + route, {headers: this._headers})
            .map(
                (response: Response) => {
                    return response.json();
                }
            )
            .catch(
                (error: Response) => {
                    let errmsg = error.statusText;
                    try{
                        const body = error.json();
                        errmsg = body['error'];
                    }
                    catch (Exception) {}
                    if (!errmsg) {
                        errmsg = 'Internal Server Error';
                    }
                    return Observable.throw(errmsg);
                }
            );
    }
}