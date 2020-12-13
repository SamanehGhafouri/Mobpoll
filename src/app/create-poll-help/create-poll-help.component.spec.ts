import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePollHelpComponent } from './create-poll-help.component';

describe('CreatePollHelpComponent', () => {
  let component: CreatePollHelpComponent;
  let fixture: ComponentFixture<CreatePollHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePollHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePollHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
