import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTimerAlertComponent } from './session-timer-alert.component';

describe('SessionTimerAlertComponent', () => {
  let component: SessionTimerAlertComponent;
  let fixture: ComponentFixture<SessionTimerAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionTimerAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTimerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
