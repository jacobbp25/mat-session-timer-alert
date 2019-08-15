import { TestBed } from '@angular/core/testing';

import { SessionTimerAlertService } from './session-timer-alert.service';

describe('SessionTimerAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionTimerAlertService = TestBed.get(SessionTimerAlertService);
    expect(service).toBeTruthy();
  });
});
