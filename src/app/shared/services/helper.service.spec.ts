import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelperService = TestBed.inject(HelperService);
    expect(service).toBeTruthy();
  });

  it('should trigger event', done => {
    const service: HelperService = TestBed.inject(HelperService);
    service.stateLoad().subscribe(res => {
      expect(res).toEqual(true);
      done();
    });
    service.chageStateLoad(true);
  });
});
