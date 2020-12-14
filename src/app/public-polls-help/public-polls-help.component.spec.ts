import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPollsHelpComponent } from './public-polls-help.component';

describe('PublicPollsHelpComponent', () => {
  let component: PublicPollsHelpComponent;
  let fixture: ComponentFixture<PublicPollsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPollsHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPollsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
