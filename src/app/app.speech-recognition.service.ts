import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadData } from './app.actions';
// @ts-ignore
import Artyom from "artyom.js";

@Injectable({ providedIn: 'root' })
export class AppSpeechRecognitionService {
  artyom;

  constructor(private store: Store) {
    this.artyom = new Artyom();
    this.startOneCommandArtyom = this.startOneCommandArtyom.bind(this)
  }

  reloadGrid = {
    indexes: ['reload', 'refresh'],
    action: () => {
      this.store.dispatch(loadData());
      this.artyom.say("Data reloaded");
    }
  }

  startOneCommandArtyom() {

    // reloadGrid.bind(this);

    this.artyom.addCommands(this.reloadGrid);

    this.artyom.fatality(); // use this to stop any of

    setTimeout(() => {
      // if you use artyom.fatality , wait 250 ms to initialize again.
      this.artyom.initialize({
        lang: "en-GB",
        continuous: true,
        listen: true,
        debug: true,
        speed: 1
      }).then(() => console.log('Listening to voice commands'));
    }, 250);
  }
}
