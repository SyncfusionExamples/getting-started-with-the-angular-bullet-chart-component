import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  public legendOptions: object = {
    visible: true
  }

  public tooltipSettings: object = {
    enable: true
  }

  public minorTick: object = {
    width: 0
  }

  public majorTick: object = {
    color: 'blue'
  }

  public sprintData: object[] = [
    { 
      requiredStories: 20, 
      completedStories: 25, 
      name: 'David'
    },
    {
      requiredStories: 25,
      completedStories: 20,
      name: "Asif"
    },
    {
      requiredStories: 15,
      completedStories: 10,
      name: "Thomas"
    },
    {
      requiredStories: 40,
      completedStories: 39,
      name: "Rohit"
    },
    {
      requiredStories: 35,
      completedStories: 40,
      name: "Virat"
    },
  ]
}
