import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Navigation {
  private location: String;
  private locationEmitter: EventEmitter<String> = new EventEmitter();
  public getNavLinks() {
    if (this.location === '' || this.location === 'Home') {
      return(
        [
          {name: 'Home', address: '', active: 'active'},
          {name: 'About', address: 'about', active: ''},
          {name: 'Contact', address: 'contact', active: ''}
        ]
      );
    } else if (this.location === 'About') {
      return(
        [
          {name: 'Home', address: '', active: ''},
          {name: 'About', address: 'about', active: 'active'},
          {name: 'Contact', address: 'contact', active: ''}
        ]
      );
    } else if (this.location === 'Contact') {
      return(
        [
          {name: 'Home', address: '', active: ''},
          {name: 'About', address: 'about', active: ''},
          {name: 'Contact', address: 'contact', active: 'active'}
        ]
      );
    }
  }
  public setNavLinks(location: String) {
    this.location = location;
    this.locationEmitter.emit('nav');
  }
  public getLocationEmitter() {
    return this.locationEmitter;
  }
}
