import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/Dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { NewMemberComponent } from './newMember/NewMember.component';


const routes: Routes = [
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'vizhuthukal', component: DashboardComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'addmember', component: NewMemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
