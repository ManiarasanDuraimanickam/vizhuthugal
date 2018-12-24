import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
    selector: 'app-wfreport',
    templateUrl: './wfreport.component.html',
    styleUrls: ['./wfreport.component.css']
})
export class WFReportComponent implements OnInit {

    public constructor() { }

    ngOnInit() {
        console.log('wfreport oninit');
    }
}
