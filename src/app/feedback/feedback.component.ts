import { Component, OnInit } from '@angular/core';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-feedback',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  location: Location;
  constructor(location: Location) { this.location = location; }

  ngOnInit() {
  }

}
