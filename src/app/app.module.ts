import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSessionInteruptService } from './services/app-session-interupt.service';

import { SessionTimerAlertModule, SessionInteruptService } from 'session-timer-alert';
//import { SessionTimerAlertModule, SessionInteruptService } from 'projects/session-timer-alert/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    SessionTimerAlertModule.forRoot({ totalMinutes: 0.5 })
  ],
  providers: [{ provide: SessionInteruptService, useClass: AppSessionInteruptService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
