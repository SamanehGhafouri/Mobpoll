import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatinerComponent } from './contatiner.component';

describe('ContatinerComponent', () => {
  let component: ContatinerComponent;
  let fixture: ComponentFixture<ContatinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
