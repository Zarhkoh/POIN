import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoLargeComponent } from './meteo-large.component';

describe('MeteoLargeComponent', () => {
  let component: MeteoLargeComponent;
  let fixture: ComponentFixture<MeteoLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
