import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BulletChartLegendService, BulletTooltipService } from '@syncfusion/ej2-angular-charts';

bootstrapApplication(AppComponent, {
  providers: [
    BulletChartLegendService,
    BulletTooltipService
  ]
});