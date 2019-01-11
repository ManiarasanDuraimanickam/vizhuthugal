import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppUtils {

    getAuthenticationJsonTemplate(username: string, password: string) {
        /* return {
             'username': username,
             'password': password,
             'hasLoginRights': true,
             'isAcive': true
         };*/
        return {
            'type': 'master',
            'data': {
                '$elemMatch': {
                    '$and': [
                        {
                            'memberid': username
                        },
                        {
                            'password': password
                        },
                        {
                            'isActive': true,
                        },
                        {
                            'hasLoginRights': true,
                        }
                    ]
                }
            }
        };
    }
}
