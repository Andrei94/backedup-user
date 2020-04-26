import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';

import {AuthenticationComponent} from './authentication/authentication.component';
import {DeleteAccountConfirmationComponent} from './delete-account-confirmation/delete-account-confirmation.component';
import {PaymentComponent} from './payment/payment.component';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {NgxGoogleAnalyticsModule} from 'ngx-google-analytics';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AuthenticationComponent,
    PaymentComponent,
    DeleteAccountConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AmplifyUIAngularModule,
    NgxGoogleAnalyticsModule.forRoot('UA-157507530-1')
  ],
  bootstrap: [AppComponent],
  entryComponents: [DeleteAccountConfirmationComponent]
})
export class AppModule {
}
