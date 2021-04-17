import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, of, Subject, throwError } from 'rxjs';
import { URLS_APP } from 'src/app/shared/consts/urls-app';
import { USER, USERAUTH, USERREGISTER } from 'src/app/shared/mocks/user-mock';
import { User } from '../models/user';
import { UserAuth, UserRegister } from '../models/user-auth';

import { AuthStoreService } from './auth-store.service';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

describe('AuthStoreService', () => {
  let service: AuthStoreService;
  let router: Router;
  let auth: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: {
            saveUser(user: UserRegister): Observable<string> {
              return of('1');
            },
            authUser(user: UserAuth): Observable<string> {
              return of('ertyuioiuytr');
            },
            findUser(id: string): Observable<User> {
              return of(USER as any);
            },
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }
        },
        {
          provide: LocalStorageService,
          useValue: {
            set: jasmine.createSpy('navigate'),
            remove: jasmine.createSpy('remove'),
            get: jasmine.createSpy('get')
          }
        }
      ],
    });
    service = TestBed.inject(AuthStoreService);
    router = TestBed.inject(Router);
    auth = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.user();
    service.error$.subscribe();
    service.user$.subscribe();
  });

  it('should save', () => {
    service.saveUser(USERREGISTER);
    expect(router.navigate).toHaveBeenCalledWith([URLS_APP.AUTH.SING_IN]);
    spyOn(auth, 'saveUser').and.returnValue(throwError(new Error()));
    service.saveUser(USERREGISTER);
  });

  it('should userAuth', () => {
    service.userAuth(USERAUTH);
    expect(router.navigate).toHaveBeenCalledWith([URLS_APP.LINK.LIST]);
    spyOn(auth, 'authUser').and.returnValue(throwError({}));
    service.userAuth(USERAUTH);
    service.user();
  });

  it('should logOut', () => {
    const storage = TestBed.inject(LocalStorageService);
    service.logOut();
    expect(router.navigate).toHaveBeenCalledWith([URLS_APP.AUTH.SING_IN]);
    expect(storage.remove).toHaveBeenCalled();
  });

  it('should isAuthenticated', () => {
    const flag = service.isAuthenticated;
    expect(flag).toBeTruthy();
  });
});
