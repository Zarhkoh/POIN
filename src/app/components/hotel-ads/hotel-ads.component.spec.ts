import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAdsComponent } from './hotel-ads.component';

describe('HotelAdsComponent', () => {
  let component: HotelAdsComponent;
  let fixture: ComponentFixture<HotelAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
