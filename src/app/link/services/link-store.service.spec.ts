import { TestBed } from '@angular/core/testing';
import { LinkStoreService } from './link-store.service';

describe('LinkStoreService', () => {
  let service: LinkStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
