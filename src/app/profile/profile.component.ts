import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../authentication/auth.service';
import {Auth} from 'aws-amplify';
import {CognitoUserAttribute} from 'amazon-cognito-identity-js';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteAccountConfirmationComponent} from '../delete-account-confirmation/delete-account-confirmation.component';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  customerId: string;
  username: string;

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private modalService: NgbModal,
              private $gaService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.username = value.get('username');
      this.$gaService.event('pageLoaded', 'profilePage', this.username);
    });

    if (!this.customerId) {
      this.createCustomerInGateway();
    }
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/']);
  }

  private createCustomerInGateway() {
    Auth.currentAuthenticatedUser()
      .then(user =>
        Auth.userAttributes(user).then((value: CognitoUserAttribute[]) => {
          this.httpClient.post(environment.createCustomerUrl, {
            firstName: value.find(value1 => value1.getName() === 'given_name').getValue(),
            lastName: value.find(value1 => value1.getName() === 'family_name').getValue(),
            email: value.find(value1 => value1.getName() === 'email').getValue(),
            phone: value.find(value1 => value1.getName() === 'phone_number').getValue()
          }).subscribe((createCustomerResponse: string) => this.customerId = createCustomerResponse, err => this.$gaService.exception(err));
        }));
  }

  subscribeQuarterTB() {
    this.updateTotalStorage('1');
    this.router.navigate(['/pay', this.username, this.customerId, 'fp2r']);
    this.$gaService.event('subscribedQuarterTB', 'subscriptions', this.username);
  }

  subscribeHalfTB() {
    this.updateTotalStorage('2');
    this.router.navigate(['/pay', this.username, this.customerId, 'vmf2']);
    this.$gaService.event('subscribedHalfTB', 'subscriptions', this.username);
  }

  subscribeOneTB() {
    this.updateTotalStorage('3');
    this.router.navigate(['/pay', this.username,  this.customerId, '29cb']);
    this.$gaService.event('subscribedOneTB', 'subscriptions', this.username);
  }

  updateTotalStorage(value: string) {
    Auth.currentAuthenticatedUser().then(user => Auth.updateUserAttributes(user, {'custom:totalStorage': value}));
  }

  deleteAccount() {
    const modal = this.modalService.open(DeleteAccountConfirmationComponent);
    modal.componentInstance.customerId = this.customerId;
    modal.componentInstance.username = this.username;
  }
}
