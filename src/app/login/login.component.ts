import { Component, OnInit, Inject, HostListener, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppGlobals } from '../core/global.var';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { AuthenticationService } from '../core/service/AuthenticationService';
import { HttpErrorResponse } from '@angular/common/http';
import { UserData } from '../core/models/UserData';

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
  invalidUserpassword: string = null;
  userData: UserData;
  loading = false;

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
    return true;
  }
  onSubmit() {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.invalidUserpassword = null;
      console.log(' onSubmit ' + this.form.value);
      //  this.form.value

      this.authService.validateUser(this.form.value.userName, this.form.value.password)
        .then((resp) => {
          this.userData = resp.docs[0];
          console.log(this.userData);
          if (this.userData && this.userData.data.length > 0) {
            this.doLogin(this.userData);
          } else {
            this.invalidUserpassword = 'mat-form-field-invalid';
            this.loading = false;
          }
        }).catch((reason) => {
          console.log('error at Login' + (<HttpErrorResponse>reason).error);
          this.loading = false;
        });
    }
  }
  doLogin(userData: UserData) {
    this.sessionStorage.set(this.appGlobal.USER_LOGGEDIN, true);
    this.userLoggedIn = this.sessionStorage.get(this.appGlobal.USER_LOGGEDIN);
    this.checkAndUpdateLoggedInComp();
    this.forwardedToLogViewer();
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

