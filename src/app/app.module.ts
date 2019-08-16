import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';

import { SessionTimerAlertModule, SessionInteruptService } from '../../dist/session-timer-alert'; //'session-timer-alert';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSessionInteruptService } from './services/app-session-interupt.service';

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
