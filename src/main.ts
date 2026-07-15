import { bootstrapApplication } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppComponent } from './app/app.component';

registerLicense("ORg4AjUWIQA/Gnt2V1hhQlJAfVddXnxLflF1VWZTe1Z6d1dWESFaRnZdQV1kSHpTdUBkWX9dd31c");
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
