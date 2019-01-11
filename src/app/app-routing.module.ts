import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/Dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { NewMemberComponent } from './newMember/NewMember.component';


const routes: Routes = [
  { path: 'vizhuthukal', component: DashboardComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'addmember', component: NewMemberComponent },
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

