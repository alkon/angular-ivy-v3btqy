import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter /*, Routes*/ } from '@angular/router';

import { APP_ROUTES } from './app.routes';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: '**', redirectTo: '/home' },
// ];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES)],
})
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
