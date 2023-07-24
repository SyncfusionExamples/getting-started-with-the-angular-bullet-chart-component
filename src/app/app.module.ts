import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  BulletChartModule, BulletChartLegendService, BulletTooltipService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BulletChartModule
  ],
  providers: [BulletChartLegendService, BulletTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
