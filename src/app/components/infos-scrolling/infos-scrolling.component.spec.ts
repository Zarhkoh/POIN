import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosScrollingComponent } from './infos-scrolling.component';

describe('InfosScrollingComponent', () => {
  let component: InfosScrollingComponent;
  let fixture: ComponentFixture<InfosScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
