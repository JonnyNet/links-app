import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { LINK, LINKS } from 'src/app/shared/mocks/link-mock';
import { LinkStoreService } from './link-store.service';
import { LinkService } from './link.service';

describe('LinkStoreService', () => {
  let service: LinkStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LinkService,
          useValue: {
            findAll(): Observable<any>{
              return of(LINKS);
            },
            deleteLink(id: string): Observable<any>{
              return of('');
            },

            saveLink(link: any): Observable<any>{
              return of(LINK);
            },
          },
        }
      ]
    });
    service = TestBed.inject(LinkStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.lisks$.subscribe();
  });

  it('should getLinks', () => {
    service.getLinks();
    service.lisks$.subscribe(res => {
      expect(res).toBeTruthy();
    });
    service.getLinks();
  });

  it('should deleteLink', () => {
    service.getLinks();
    service.deleteLink('1');
    service.lisks$.subscribe(res => {
      expect(res).toBeTruthy();
    });
  });

  it('should saveLink', () => {
    service.getLinks();
    service.saveLink(LINK);
    service.lisks$.subscribe(res => {
      expect(res).toBeTruthy();
    });
  });
});
