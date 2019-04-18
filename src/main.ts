import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "hammerjs";

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));