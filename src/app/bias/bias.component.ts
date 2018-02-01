import { TreeModel } from 'ng2-tree';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BiasClassificationTree } from './bias-classification';
import { AllBiasesInfo } from './bias-info';
import { Bias } from './bias.model';

@Component({
  selector: 'app-bias',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './bias.component.html',
  styleUrls: ['./bias.component.css']
})
export class BiasComponent implements OnInit {

  biasClassificationTree: TreeModel = BiasClassificationTree;
  allBiasesInfo: Bias[] = AllBiasesInfo;
  selectedBias: Bias = null;
  location: Location;

  @ViewChild('treeComponent') treeComponent;

  constructor(location: Location) { this.location = location; }

  ngOnInit() { }

  ngAfterViewInit(): void {
    let arr = [3,4,6,7,8,9,11,12,13,14,15];
    for(let i=0;i<arr.length;i++) {
      this.treeComponent.getControllerByNodeId(arr[i]).collapse();
    }
  }

  handleSelected(selectedNodeEvent){
    if(selectedNodeEvent) {
      let selectedNode:string = selectedNodeEvent.node.value;
      let selectedNodeParent:string;
      selectedNodeParent= selectedNodeEvent.node.parent.parent.value==="Cognitive Biases" ?
          selectedNodeParent = selectedNodeEvent.node.parent.value : selectedNodeParent = selectedNodeEvent.node.parent.parent.value;
      this.selectedBias = this.allBiasesInfo.filter(
          bias => ((bias.id === selectedNode) && (bias.parentId === selectedNodeParent)))[0];
    }
  }

}
