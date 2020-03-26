import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppSessionInteruptService } from "./services/app-session-interupt.service";

import {
  SessionTimerAlertModule,
  SessionInteruptService
} from "@uiowa/session-timer-alert";

// import { SessionTimerAlertModule, SessionInteruptService } from "projects/session-timer-alert/src/public_api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    SessionTimerAlertModule.forRoot({ totalMinutes: 0.5 })
  ],
  providers: [
    { provide: SessionInteruptService, useClass: AppSessionInteruptService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
