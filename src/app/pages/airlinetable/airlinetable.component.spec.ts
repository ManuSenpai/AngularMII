import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinetableComponent } from './airlinetable.component';

describe('AirlinetableComponent', () => {
  let component: AirlinetableComponent;
  let fixture: ComponentFixture<AirlinetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
