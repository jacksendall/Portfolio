import { Component } from '@angular/core';
import { RouterOutlet, OutletContext } from '@angular/router';
import { Fader } from './route-animations';
import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  toggleSidebar() {
    $('body').toggleClass('menu-active')
  };
}
