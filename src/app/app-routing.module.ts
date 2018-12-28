import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/Dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  { path: 'vizhuthukal', component: DashboardComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
