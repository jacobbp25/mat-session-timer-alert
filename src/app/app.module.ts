import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SessionTimerAlertModule } from 'session-timer-alert';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SessionTimerAlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
