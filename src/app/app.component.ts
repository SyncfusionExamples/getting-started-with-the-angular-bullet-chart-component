import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ShapeStyleModel, NodeModel, DiagramComponent, DiagramTools, Diagram, TextStyleModel } from "@syncfusion/ej2-angular-diagrams";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'myangularproject';
  @ViewChild("diagram") public diagramObj?: DiagramComponent;
  // public nodeStyle: ShapeStyleModel = { fill: '#6495ED' }
  public nodeStyle: TextStyleModel = { textAlign: 'Left'}

  public node: NodeModel = {
    offsetX: 450,
    offsetY: 450,
    width: 150,
    height: 150,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
};

 public addNode(){
  // this.diagramObj?.add(this.node);
  (this.diagramObj as Diagram).tool = DiagramTools.DrawOnce;
  (this.diagramObj as Diagram).drawingObject = { shape: { type: 'Basic', shape: 'Rectangle' } };;
  this.diagramObj?.dataBind();
  // this.diagramObj?.addNode()
 }

//  public shape = { type: 'Text', content: 'Text Node'};
// public shape = {type: 'Image',
// source: 'https://www.syncfusion.com/content/images/nuget/sync_logo_icon.png'} //https://ej2.syncfusion.com/angular/demos/assets/diagram/employees/image2.png
// public shape = {type:'Path',
// data: 'M35.2441,25 L22.7161,49.9937 L22.7161,0.00657536 L35.2441,25 z M22.7167,25 L-0.00131226,25 M35.2441,49.6337 L35.2441,0.368951 M35.2441,25 L49.9981,25'}
public shape = {type: 'HTML'}
 public editNode(){
  (this.diagramObj as Diagram).nodes[0].style= { fill: 'red', strokeColor: 'yellow' }; //Stroke Color not working
  // this.diagramObj?.remove(this.diagramObj.nodes[0]);
 }
}
