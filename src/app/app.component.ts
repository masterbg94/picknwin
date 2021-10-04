import {ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';
import {AuthenticationService} from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'PicknWin';
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  _mobileQueryListener: () => void;
  innerWidth: number;
  sideMenu = [
    {
      path: '/',
      name: 'Home',
      icon: ''
    },
    {
      path: '/matches',
      name: 'Matches',
      icon: ''
    },
    {
      path: '/leadbord',
      name: 'Leaderbord',
      icon: ''
    },
    {
      path: '/documents',
      name: 'Documents',
      icon: ''
    },
    {
      path: '/profile',
      name: 'Profile',
      icon: ''
    },
    {
      path: '/register',
      name: 'Register',
      icon: ''
    },
    {
      path: '/login',
      name: 'Login',
      icon: ''
    }
  ];
  subscription: Subscription[] = [];
  isLogged: boolean;

  /** TODO: Srediti constructor izbaciti nepotrebne stvari */
  constructor(private authService: AuthenticationService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.innerWidth = window.innerWidth;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.innerWidth = window.innerWidth;
    console.log('appRoot', this.innerWidth);
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    // console.log('innerWidth', this.innerWidth);
    this.subscription.push(
      this.authService.currentUser.subscribe(
        (userLogStatus) => {
          if (userLogStatus != null) {
            this.isLogged = true;
          } else if (userLogStatus == null) {
            this.isLogged = false;
          }
        }, (error: any) => {
          alert(error);
        }
      )
    );
  }


}
