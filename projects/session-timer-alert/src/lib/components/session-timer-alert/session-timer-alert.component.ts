import { Component, Inject, ChangeDetectionStrategy, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SessionTimerService } from '../../services/session-timer.service';
import { Subscription } from 'rxjs';
import { SessionInteruptService } from '../../services/session-interupt.service';

@Component({
  selector: 'mat-session-timer-alert',
  templateUrl: './session-timer-alert.component.html',
  styleUrls: ['./session-timer-alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionTimerAlertComponent implements OnInit, OnChanges, OnDestroy {
  @Input() startTimer? = true;
  @Input() alertAt? = 60;
  private sessionTimerSubscription: Subscription;

  constructor(private dialog: MatDialog, private sessionTimer: SessionTimerService, private sessionInterupter: SessionInteruptService) {}

  ngOnInit() {
    if (!this.sessionTimerSubscription && this.startTimer) {
      this.trackSessionTime();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.startTimer) {
      this.cleanUp();
      if (changes.startTimer.currentValue) {
        this.trackSessionTime();
      }
    }
  }

  trackSessionTime() {
    this.sessionTimer.startTimer();
    this.sessionTimerSubscription = this.sessionTimer.remainSeconds$.subscribe(t => {
      if (t === this.alertAt) {
        this.openDialog();
      }
      if (t === 0) {
        if (this.dialog.openDialogs) {
          this.dialog.closeAll();
        }
        this.cleanUp();
        this.sessionInterupter.stopSession();
      }
    });
  }

  cleanUp() {
    this.sessionTimer.stopTimer();
    if (this.sessionTimerSubscription) {
      this.sessionTimerSubscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.cleanUp();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatSessionTimerAlertDialog, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'mat-session-timer-alert-dialog',
  templateUrl: 'session-timer-alert-dialog.html'
})
export class MatSessionTimerAlertDialog {
  constructor(
    public dialogRef: MatDialogRef<MatSessionTimerAlertDialog>,
    private sessionInterupter: SessionInteruptService,
    public sessionTimer: SessionTimerService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  continue() {
    this.sessionInterupter.continueSession();
    this.sessionTimer.resetTimer();
    this.dialogRef.close();
  }
  logout() {
    this.sessionTimer.stopTimer();
    this.dialogRef.close();
    this.sessionInterupter.stopSession();
  }
}
