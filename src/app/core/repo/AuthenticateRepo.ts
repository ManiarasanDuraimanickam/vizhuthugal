import { Injectable } from '@angular/core';
import {Connection} from 'mysql' ;

@Injectable({
    providedIn: 'root'
})
export class AuthenticateRepo {
    constructor(conn: Connection) {}

    getConnection(): Connection {
        return new Connection();
    }

}
