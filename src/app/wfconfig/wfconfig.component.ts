import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-wfconfig',
  templateUrl: './wfconfig.component.html',
  styleUrls: ['./wfconfig.component.css']
})
export class WFconfigComponent {


  constructor(@Inject(SESSION_STORAGE) private sessionStorage: StorageService) { }
}
