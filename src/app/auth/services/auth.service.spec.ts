import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { USER, USERAUTH, USERREGISTER } from 'src/app/shared/mocks/user-mock';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should saveUser', done => {
    spyOn(http, 'post').and.returnValue(of('1'));
    service.saveUser(USERREGISTER).subscribe((res: any) => {
      expect(res).toBeTruthy();
      done();
    }); 
  });

  it('should findUser', done => {
    spyOn(http, 'get').and.returnValue(of(USER));
    service.findUser('1').subscribe((res: any) => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it('should authUser', done => {
    spyOn(http, 'post').and.returnValue(of('vngyujnbvgyujn'));
    service.authUser(USERAUTH).subscribe((res: any) => {
      expect(res).toBeTruthy();
      done();
    });
  });
});
