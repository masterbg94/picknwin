import {ChangeDetectorRef, Component, HostListener, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
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

  /** TODO: Srediti constructor izbaciti nepotrebne stvari */
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
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
    console.log(this.innerWidth);
  }


}
