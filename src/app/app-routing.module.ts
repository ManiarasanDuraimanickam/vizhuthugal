import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogviewerComponent } from './logviewer/logviewer.component';
import { WFconfigComponent } from './wfconfig/wfconfig.component';
import { WFRequestResetComponent } from './wfrequest-reset/wfrequest-reset.component';
import { LoginComponent } from './login/login.component';
import { WFReportComponent } from './wfreport/wfreport.component';

const routes: Routes = [
  { path: 'viewlog', component: LogviewerComponent },
  { path: 'wfconfig', component: WFconfigComponent },
  { path: 'wfrequestreset', component: WFRequestResetComponent },
  { path: 'login', component: LoginComponent },
  { path: "wfreport", component: WFReportComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
