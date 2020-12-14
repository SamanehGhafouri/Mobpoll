import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreHelpComponent } from './learn-more-help.component';

describe('LearnMoreHelpComponent', () => {
  let component: LearnMoreHelpComponent;
  let fixture: ComponentFixture<LearnMoreHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
