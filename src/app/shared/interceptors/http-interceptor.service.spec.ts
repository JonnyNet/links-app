import { HttpClient, HttpEventType, HttpHeaders, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { URLS_APP } from '../consts/urls-app';
import { HelperService } from '../services/helper.service';

import { HttpInterceptorService } from './http-interceptor.service';

describe('HttpInterceptorService', () => {
  let service: HttpInterceptorService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        HelperService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true,
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ]
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(HttpInterceptorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should response with error', () => {
    const router = TestBed.inject(Router);
    http.post('/', {}).subscribe(() => { });
    httpMock.expectOne('/').flush(new ErrorEvent('Error 500'), { status: 500, statusText: 'Server Error' });
    expect(router.navigate).toHaveBeenCalledWith([URLS_APP.ERRORS.E500]);
  });

  it('should intercept request', () => {
    const helper = TestBed.inject(HelperService);
    const hide = spyOn(helper, 'chageStateLoad');
    const response = {
      status: 200,
      body: {},
      clone: {} as any,
      headers: new HttpHeaders(),
      ok: true,
      url: '/',
      type: HttpEventType.Response,
      statusText: '',
    };
    ['/', '/1'].forEach(x => {
      http.get(x).subscribe((res: any) => { });
    });
    httpMock.expectOne('/').event(response as any);
    httpMock.expectOne('/1').event(null as any);
    expect(hide).toHaveBeenCalled();
  });
});
