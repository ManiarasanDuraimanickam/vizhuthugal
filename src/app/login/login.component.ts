import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppGlobals } from '../core/global.var';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { AuthenticationService } from '../core/service/AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AppGlobals]
})

export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private appGlobal: AppGlobals,
    // tslint:disable-next-line:whitespace
    @Inject(SESSION_STORAGE) private sessionStorage: StorageService, private route: Router, private authService: AuthenticationService) {
    // tslint:disable-next-line:max-line-length
    this.userLoggedIn = this.sessionStorage.get(appGlobal.USER_LOGGEDIN) === null ? false : this.sessionStorage.get(appGlobal.USER_LOGGEDIN);
    //  console.log("constructor " + this.loginShowHide + " userLoggedIn " + this.userLoggedIn);
  }

  form: FormGroup;
  loginShowHide = 'none';
  appShowHide = 'none';
  userLoggedIn = false;
  loggedIn = false;
  @HostListener('window:onbeforeunload', ['$event'])
  clearLocalStorage(event) {
    sessionStorage.clear();
  }
  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.checkAndUpdateLoggedInComp();
    // this.forwardedToLogViewer();
  }
  isFieldInvalid(s: string) {

  }
  onSubmit() {
    if (this.form.valid) {
      console.log(' onSubmit ' + this.form.value);
      //  this.form.value
      this.authService.validateUser(this.form.value.userName, this.form.value.password);
      this.sessionStorage.set(this.appGlobal.USER_LOGGEDIN, true);
      this.userLoggedIn = this.sessionStorage.get(this.appGlobal.USER_LOGGEDIN);
      this.checkAndUpdateLoggedInComp();
      this.forwardedToLogViewer();
    }
  }
  checkAndUpdateLoggedInComp() {
    if (!this.userLoggedIn) {
      this.loginShowHide = 'block';
      this.appShowHide = 'none';
      // console.log("checkAndUpdateLoggedInComp " + this.loginShowHide);
    } else {
      this.loginShowHide = 'none';
      this.appShowHide = 'block';
      //  console.log("checkAndUpdateLoggedInComp " + this.loginShowHide);
    }
  }
  forwardedToLogViewer() {
    this.route.navigate(['/vizhuthukal']);
  }
}
