import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set', () => {
    const key = 'TOKEN';
    const value = 'gyujnbgyujnbvghyuj';
    service.set(key, value);
    expect(service.get(key)).toEqual(value);
    service.remove(key);
    expect(service.get(key)).toBeNull();
  });

});
