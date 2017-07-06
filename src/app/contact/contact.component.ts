import { Component, OnInit } from '@angular/core';
import { Navigation } from '../shared/navigation.service';
@Component({
  selector: 'my-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private navigation: Navigation) {
    // Do stuff
  }

  ngOnInit() {
    this.navigation.setNavLinks('Contact');
  }

}
