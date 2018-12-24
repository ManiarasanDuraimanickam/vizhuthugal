import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {CustomMaterialModule} from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './dashboard/app.component';
import {SidenavigationComponent} from './sidenavigation/sidenavigation.component';
import { LogviewerComponent } from './logviewer/logviewer.component';
import { WFconfigComponent } from './wfconfig/wfconfig.component';
import { WFRequestResetComponent } from './wfrequest-reset/wfrequest-reset.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppGlobals } from './core/global.var';
import { WFReportComponent } from './wfreport/wfreport.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavigationComponent,
    LogviewerComponent,
    WFconfigComponent,
    WFRequestResetComponent,
    LoginComponent,
    LogoutComponent,
    WFReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule, ReactiveFormsModule,
    StorageServiceModule, HttpClientModule
  ],
  providers: [AppGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
