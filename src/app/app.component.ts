import { Component } from '@angular/core';
// import { slider, transformer, fader, stepper } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   fader
  //   // slider
  //   // transformer,
  //   // stepper
  // ]
})
export class AppComponent {
  title = 'feelsproject';

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
