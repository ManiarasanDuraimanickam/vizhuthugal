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

    validateUser(username: string, password: string): UserData {
        const loginObject = this.couchDB._find(this.appUtils.getAuthenticationJsonTemplate(username, password));
        let userData: UserData;
        loginObject.then((resp: UserData) => {
            userData = resp;
            console.log(userData);
        });
        loginObject.catch((reason) => {
            console.log('error at Login' + (<HttpErrorResponse> reason).error);
        });
        return userData;
    }
}

export interface UserData {
    _id: string;
    _rev: string;
    name: string;
    fatherName: string;
    gender: string;
    isAcive: boolean;
    DOJ: string;
    hasLoginRights: boolean;
    username: string;
    contactNo: number;
    countryCode: string;
    memberID: number;
    role: string;
}
