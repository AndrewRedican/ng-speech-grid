import { Injectable } from '@angular/core';
// @ts-ignore
import Artyom from "artyom.js";

@Injectable({ providedIn: 'root' })
export class AppSpeechRecognitionService {
  constructor() { }

  startOneCommandArtyom() {
    const artyom = new Artyom();

    // Add a single command
    var reloadGrid = {
      indexes: ["reload"],
      action: function () {
        // this.dispatch()
        console.log('reload')
      }
    };

    artyom.addCommands(reloadGrid);

    artyom.fatality(); // use this to stop any of

    setTimeout(function () {
      // if you use artyom.fatality , wait 250 ms to initialize again.
      artyom.initialize({
        lang: "en-GB",// A lot of languages are supported. Read the docs !
        continuous: false,// recognize 1 command and stop listening !
        listen: true, // Start recognizing
        debug: true, // Show everything in the console
        speed: 1 // talk normally
      }).then(function () {
        console.log("Ready to work !");
      });
    }, 250);
  }
}
