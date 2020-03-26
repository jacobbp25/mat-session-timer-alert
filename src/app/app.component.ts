import { Component } from "@angular/core";
import { SessionTimerService } from "@uiowa/session-timer-alert";
//import { SessionTimerService } from "projects/session-timer-alert/src/public_api";

@Component({
  selector: "seademo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  alertAt = 15;
  startTimer = true;

  constructor(public sessionTimer: SessionTimerService) {}
  increase() {
    this.alertAt++;
  }
  toggletimer() {
    this.startTimer = !this.startTimer;
  }
}
