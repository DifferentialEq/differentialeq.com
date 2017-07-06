import { Component, OnInit } from '@angular/core';
import { Navigation } from '../shared';
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  xprimeEqAx = '$$x\' = Ax$$';
  x = '$x$';
  xprime = '$x\'$';
  R2 = '$ \\mathbb{R^2} $';
  R = '$ \\mathbb{R} $';
  A = '$A$';
  twoxtwo = '$2 \\times 2$';
  constructor(private navigation: Navigation) {
    // Do stuff
  }

  ngOnInit() {
    this.navigation.setNavLinks('Home');
  }

}
