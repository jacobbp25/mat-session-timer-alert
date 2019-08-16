import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SessionTimerService } from './services/session-timer.service';
import { SessionTimerHttpInterceptor } from './services/session-timer-http-interceptor';
import { SessionTimerAlertComponent, MatSessionTimerAlertDialog } from './components/session-timer-alert/session-timer-alert.component';
import { SessionInteruptService } from './services/session-interupt.service';
import { SessionExpirationConfig, ConfigToken } from './models/session-expiration-config';

@NgModule({
  declarations: [SessionTimerAlertComponent, MatSessionTimerAlertDialog],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  providers: [
    SessionTimerService,
    { provide: HTTP_INTERCEPTORS, useClass: SessionTimerHttpInterceptor, multi: true },
    SessionInteruptService
  ],
  exports: [SessionTimerAlertComponent, MatSessionTimerAlertDialog],
  entryComponents: [MatSessionTimerAlertDialog]
})
export class SessionTimerAlertModule {
  static forRoot(
    config: SessionExpirationConfig = {
      totalMinutes: 20
    }
  ): ModuleWithProviders {
    return {
      ngModule: SessionTimerAlertModule,
      providers: [{ provide: ConfigToken, useValue: config }]
    };
  }
}
