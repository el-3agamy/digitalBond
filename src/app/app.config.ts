import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { TitleStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CustomTitleStrategy } from './providers/custom-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    { provide: TitleStrategy, useClass: CustomTitleStrategy }
  ]
};
