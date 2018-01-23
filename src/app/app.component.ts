import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router:Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
          return false;
      };

      this.router.events.subscribe((evt) => {
          if (evt instanceof NavigationEnd) {
              // trick the Router into believing it's last link wasn't previously loaded
              this.router.navigated = false;
              // if you need to scroll back to top, here is the right place
              window.scrollTo(0, 0);
          }
      });
  }

  ngOnInit() {
      $.material.options.autofill = true;
      $.material.init();
  }

}
