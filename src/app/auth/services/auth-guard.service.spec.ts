import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { URLS_APP } from 'src/app/shared/consts/urls-app';

import { AuthGuardService } from './auth-guard.service';
import { AuthStoreService } from './auth-store.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthStoreService,
          useValue: {
            isAuthenticated: false,
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }
        }
      ],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should canActivate', () => {
    const router = TestBed.inject(Router);
    service.canActivate();
    expect(router.navigate).toHaveBeenCalledWith([URLS_APP.AUTH.SING_IN]);
  });
});

describe('AuthGuardService2', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthStoreService,
          useValue: {
            isAuthenticated: true,
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }
        }
      ],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should canActivate', () => {
    const router = TestBed.inject(Router);
    const flag = service.canActivate();
    expect(flag).toBeTruthy();
  });
});
