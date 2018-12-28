import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HttpClientModule } from '@angular/common/http';

import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';


import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppGlobals } from './core/global.var';
import { DashboardComponent } from './dashboard/Dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AppComponent } from './root/app.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavigationComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    SubscriptionComponent
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
