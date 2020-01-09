import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoTinyComponent } from './meteo-tiny.component';

describe('MeteoTinyComponent', () => {
  let component: MeteoTinyComponent;
  let fixture: ComponentFixture<MeteoTinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoTinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoTinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
