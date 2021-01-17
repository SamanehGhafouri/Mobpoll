import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAPollFormComponent } from './take-a-poll-form.component';

describe('TakeAPollFormComponent', () => {
  let component: TakeAPollFormComponent;
  let fixture: ComponentFixture<TakeAPollFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAPollFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAPollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
