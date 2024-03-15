import { ApplicationConfig } from '@angular/core';
import { NoPreloading, provideRouter, withPreloading } from '@angular/router';

// import { routes } from './app.routes';
import routes from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(NoPreloading)
    )
  ]
};
