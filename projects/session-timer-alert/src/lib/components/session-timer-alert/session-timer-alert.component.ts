import { Component, Inject, ChangeDetectionStrategy, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionTimerService } from '../../services/session-timer.service';
import { Subscription } from 'rxjs';
import { SessionInteruptService } from '../../services/session-interupt.service';

export interface DialogData {
  //delete
  animal: string;
  name: string;
}

@Component({
  selector: 'mat-session-timer-alert',
  templateUrl: './session-timer-alert.component.html',
  styleUrls: ['./session-timer-alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionTimerAlertComponent implements OnInit, OnChanges, OnDestroy {
  @Input() startTimer? = true;
  @Input() alertAt? = 60;
  animal: string; //delete
  name: string; //delete
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
        //this.modalRef = this.modalService.open(SessionExpirationAlertModalComponent, this.ngbModalOptions);
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
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'mat-session-timer-alert-dialog',
  templateUrl: 'session-timer-alert-dialog.html'
})
export class MatSessionTimerAlertDialog {
  constructor(public dialogRef: MatDialogRef<MatSessionTimerAlertDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
