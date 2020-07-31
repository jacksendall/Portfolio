import { Component } from '@angular/core';
import { RouterOutlet, OutletContext } from '@angular/router';
import { Fader } from './route-animations';
import axios from "axios";
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

  // contactSubmit(event) {
  //   console.log(event);
  // };

}
