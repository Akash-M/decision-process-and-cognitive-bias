import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionProcessComponent } from './decision-process.component';

describe('DecisionProcessComponent', () => {
  let component: DecisionProcessComponent;
  let fixture: ComponentFixture<DecisionProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
