import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, appConfig } from '@app/frontend-root';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
