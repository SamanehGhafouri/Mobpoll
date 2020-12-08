import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePollSubmitWarningComponent } from './create-poll-submit-warning.component';

describe('CreatePollSubmitWarningComponent', () => {
  let component: CreatePollSubmitWarningComponent;
  let fixture: ComponentFixture<CreatePollSubmitWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePollSubmitWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePollSubmitWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
