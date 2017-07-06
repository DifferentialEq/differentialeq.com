import { Component } from '@angular/core';
import { Navigation } from './shared';
import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/differentialeq';
  title: string;
  navLinks = [];

  constructor(private navigation: Navigation) {
    this.navigation.getLocationEmitter().subscribe((item: string) => {
        if (item === 'nav') {
            this.navLinks = this.getNavLinks();
        }
    });
  }

  getNavLinks() {
    return this.navigation.getNavLinks();
}

}
