import { TestBed } from '@angular/core/testing';

import { ScrollingInformationsService } from './scrolling-informations.service';

describe('ScrollingInformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollingInformationsService = TestBed.get(ScrollingInformationsService);
    expect(service).toBeTruthy();
  });
});
