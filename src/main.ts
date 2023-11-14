import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/tether/dist/js/tether.min.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
