import { Component, OnInit, ViewChild, HostListener, Inject, Input, OnDestroy } from '@angular/core';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-logviewer',
  templateUrl: './logviewer.component.html',
  styleUrls: ['./logviewer.component.css']
})
export class LogviewerComponent {

  constructor(@Inject(SESSION_STORAGE) private session: StorageService) { }

}


