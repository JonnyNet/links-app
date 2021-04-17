import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LINK, LINKS } from 'src/app/shared/mocks/link-mock';

import { LinkService } from './link.service';

describe('LinkService', () => {
  let service: LinkService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(LinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should saveUser', done => {
    spyOn(http, 'get').and.returnValue(of(LINKS));
    service.findAll().subscribe((res: any) => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should deleteLink', done => {
    service.deleteLink('1').subscribe((res: any) => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should deleteLink', done => {
    service.saveLink(LINK).subscribe((res: any) => {
      expect(res).toBeTruthy();
      done();
    });
  });
});
