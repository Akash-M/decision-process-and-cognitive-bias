import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiasComponent } from './bias.component';

describe('BiasComponent', () => {
  let component: BiasComponent;
  let fixture: ComponentFixture<BiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
