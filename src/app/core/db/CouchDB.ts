import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const COUCHDB_ROOT_URL = 'http://localhost:5984';
const COUCHDB_NAME = 'vizhuthukal';
const COUCHDB_QUERY_SELECTOR = '_find';

@Injectable({
    providedIn: 'root'
})
export class CouchDB {
    headers;
    couchDBUtil: CouchDBUtil;
    constructor(private http: HttpClient) {
        this.couchDBUtil = new CouchDBUtil();

    }

    public _find(body: any, options?): Promise<any> {
        const selector = {
            'selector': body
        };
        return this.http.post(this.couchDBUtil.getRestApiURL(COUCHDB_QUERY_SELECTOR), selector,
            { headers: this.couchDBUtil.getHeaders() }).toPromise();
    }
}

class CouchDBUtil {
    constructor() { }
    getRestApiURL(selectorEndpoint: string): string {
        return COUCHDB_ROOT_URL.concat('/').concat(COUCHDB_NAME).concat('/').concat(selectorEndpoint);
    }
    getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46dml6aHV0aHVrYWwwOCM='
        });
    }
}
