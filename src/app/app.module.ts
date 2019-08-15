import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';

import { SessionTimerAlertModule } from '../../dist/session-timer-alert'; //'session-timer-alert';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SessionTimerAlertModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
