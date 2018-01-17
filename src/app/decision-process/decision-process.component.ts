import { Component, OnInit } from '@angular/core';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-decision-process',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './decision-process.component.html',
  styleUrls: ['./decision-process.component.css']
})
export class DecisionProcessComponent implements OnInit {

  imgSrc:string = "../../assets/img/decision-process.PNG";
  location: Location;

  constructor(location: Location) { this.location = location; }

  ngOnInit() {
  }

  displayImage(selectedProcessModel){
    this.imgSrc = selectedProcessModel;
  }

}
