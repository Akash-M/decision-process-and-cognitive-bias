import { Component, OnInit } from '@angular/core';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AllProcessModelsInfo } from './decision-process-info';

@Component({
  selector: 'app-decision-process',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './decision-process.component.html',
  styleUrls: ['./decision-process.component.css']
})
export class DecisionProcessComponent implements OnInit {

  imgSrc:string = "../../assets/img/decision-process.PNG";
  location: Location;
  selectedInfo;

  constructor(location: Location) { this.location = location; }

  ngOnInit() {}

  displayImage(selectedProcessModel){
    this.imgSrc = selectedProcessModel;
    if(selectedProcessModel.indexOf('ooda_loop_info')>= 0)
      this.selectedInfo = AllProcessModelsInfo.ooda_loop_info;
    else if(selectedProcessModel.indexOf('decision_making_process')>= 0)
      this.selectedInfo = AllProcessModelsInfo.decision_making_process;
    else if(selectedProcessModel.indexOf('rational_economic_model')>= 0)
      this.selectedInfo = AllProcessModelsInfo.rational_economic_model;
    else if(selectedProcessModel.indexOf('bounded_rational_model')>= 0)
      this.selectedInfo = AllProcessModelsInfo.bounded_rational_model;
    else if(selectedProcessModel.indexOf('recognition_primed_model')>= 0)
      this.selectedInfo = AllProcessModelsInfo.recognition_primed_model;
  }

}
