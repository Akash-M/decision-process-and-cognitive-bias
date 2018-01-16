import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision-process',
  templateUrl: './decision-process.component.html',
  styleUrls: ['./decision-process.component.css']
})
export class DecisionProcessComponent implements OnInit {

  imgSrc:string = "../../assets/img/decision-process.PNG";

  constructor() { }

  ngOnInit() {
  }

  displayImage(selectedProcessModel){
    this.imgSrc = selectedProcessModel;
  }

}
