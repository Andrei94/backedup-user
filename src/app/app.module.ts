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
import {ContactUsComponent} from './contact-us/contact-us.component';
import {environment} from '../environments/environment';
import {RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AuthenticationComponent,
    PaymentComponent,
    DeleteAccountConfirmationComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    CommonModule,
    AmplifyUIAngularModule,
    NgxGoogleAnalyticsModule.forRoot(environment.trackingCode)
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.siteKey,
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent],
  entryComponents: [DeleteAccountConfirmationComponent]
})
export class AppModule {
}
