import{Injectable} from '@angular/core'

@Injectable()
export class AppGlobals{
public USER_LOGGEDIN:string ='USER_LOGGEDIN';
public ABSTRACT_LOG_SERVICE_URL:string ='http://localhost:8080/mvc/workflow/abstractLogs';
public LOG_TRANS_DETAILS_SERVICE_URL:string ='http://localhost:8080/mvc/workflow';
public GET_ABSTRACT_WF_CONFIG:string ='http://localhost:8080/mvc/workflow/wfconfig';
public GET_WF_REPORT:string ='http://localhost:8080/mvc/workflow/wfreport';

}