import {Router} from '@angular/router';
import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  signUpFields = [{
    type: 'given_name',
    label: 'Enter First Name *',
    placeholder: 'First Name',
    hint: '',
    required: true
  }, {
    type: 'family_name',
    label: 'Enter Last Name *',
    placeholder: 'Last Name',
    hint: '',
    required: true
  }, {
    type: 'username',
    label: 'Enter Username *',
    placeholder: 'Username',
    hint: '',
    required: true
  }, {
    type: 'email',
    label: 'Enter Email *',
    placeholder: 'Email',
    hint: '',
    required: true
  }, {
    type: 'password',
    label: 'Enter Password *',
    placeholder: 'Password',
    hint: '',
    required: true
  }];

  constructor(private ngZone: NgZone, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.auth$.subscribe(value => {
      if (value.event === 'signedin') {
        this.ngZone.run(() => this.router.navigate(['/profile', value.username]));
      }
    }, error => console.log(error));
  }
}
