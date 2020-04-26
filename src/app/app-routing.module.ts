import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {PaymentComponent} from './payment/payment.component';
import {AuthenticationComponent} from './authentication/authentication.component';

const routes: Routes = [
  {path: 'auth', component: AuthenticationComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'pay/:username/:customerId/:planId', component: PaymentComponent},
  {path: '**', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
