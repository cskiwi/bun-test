import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, config } from '@app/frontend-root';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
