import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheTopicComponent } from './about-the-topic.component';

describe('AboutTheTopicComponent', () => {
  let component: AboutTheTopicComponent;
  let fixture: ComponentFixture<AboutTheTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
