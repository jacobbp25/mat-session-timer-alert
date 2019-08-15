import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
//mat select module import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { SessionTimerService } from './services/session-timer.service';
//import { SessionTimerHttpInterceptor } from './services/session-timer-http-interceptor';
import { SessionTimerAlertComponent, DialogOverviewExampleDialog } from './components/session-timer-alert/session-timer-alert.component';
//import { SessionExpirationAlertModalComponent } from './components/session-expiration-alert-modal/session-expiration-alert-modal.component';
//import { SessionInteruptService } from './services/session-interupt.service';
//import { SessionExpirationConfig, ConfigToken } from './models/session-expiration-config';

@NgModule({
  declarations: [SessionTimerAlertComponent, DialogOverviewExampleDialog],
  imports: [CommonModule, MatInputModule, FormsModule],
  providers: [
    // SessionTimerService,
    //{ provide: HTTP_INTERCEPTORS,
    // useClass: SessionTimerHttpInterceptor, multi: true },
    //SessionInteruptService
  ],
  exports: [SessionTimerAlertComponent, DialogOverviewExampleDialog, MatInputModule]
})
export class SessionTimerAlertModule {
  // static forRoot(
  //   config: SessionExpirationConfig = {
  //     totalMinutes: 20
  //   }
  // ): ModuleWithProviders {
  //   return {
  //     ngModule: SessionTimerAlertModule,
  //     providers: [{ provide: ConfigToken, useValue: config }]
  //   };
  // }
}
