import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-home',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location: Location;
  constructor(private router: Router, location: Location) { this.location = location; }

  ngOnInit() {
  }

  navigate(route){
    this.router.navigateByUrl('/'+route);
  }

}
