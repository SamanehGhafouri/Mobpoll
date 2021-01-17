import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAPollComponent } from './take-a-poll.component';

describe('TakeAPollComponent', () => {
  let component: TakeAPollComponent;
  let fixture: ComponentFixture<TakeAPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
