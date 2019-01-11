import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Input, OnInit, Inject } from '@angular/core';
import { UserData } from '../core/models/UserData';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { AppGlobals } from '../core/global.var';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  @Input()
  userData: UserData;
  userLoggedIn = false;
  private _mobileQueryListener: () => void;

  public constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    @Inject(SESSION_STORAGE) private sessionStorage: StorageService, private appGlobal: AppGlobals) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    if (this.sessionStorage.get(this.appGlobal.USER_DATA) === null) {
      this.sessionStorage.set(this.appGlobal.USER_DATA, this.userData);
    } else {
      this.userData = this.sessionStorage.get(this.appGlobal.USER_DATA);
    }
    console.log('SidenavigationComponent init' + this.userData + 'Member ID' + this.userData.data[0].memberid);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.sessionClear();
  }
  sessionClear() {
    this.sessionStorage.remove(this.appGlobal.USER_DATA);
  }
}

