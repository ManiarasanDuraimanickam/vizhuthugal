import { Injectable } from '@angular/core';
import { AppGlobals } from '../global.var';
import { AppUtils } from '../utils/AppUtils';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CouchDB } from '../db/CouchDB';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private appConstant: AppGlobals, private appUtils: AppUtils, private couchDB: CouchDB) { }

    validateUser(username: string, password: string): Promise<any> {
        return this.couchDB._find(this.appUtils.getAuthenticationJsonTemplate(username, password));
    }
}

