import { Component, OnInit } from '@angular/core';
import { Navigation } from '../shared';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  xprimeEqAx = '$x\' = Ax$';
  A = '$A$';
  twoxtwo = '$2 \\times 2$';

  constructor(private navigation: Navigation) {
    // Do stuff
  }

  ngOnInit() {
    this.navigation.setNavLinks('About');
  }

}
