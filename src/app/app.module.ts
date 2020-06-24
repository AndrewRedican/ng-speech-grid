import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppService } from './app.service';
import { AppSpeechRecognitionService } from './app.speech-recognition.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [AppService, AppSpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
