import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    $('body').toggleClass('menu-active')
  };


}
