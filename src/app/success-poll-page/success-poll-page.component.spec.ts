import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPollPageComponent } from './success-poll-page.component';

describe('SuccessPollPageComponent', () => {
  let component: SuccessPollPageComponent;
  let fixture: ComponentFixture<SuccessPollPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessPollPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
