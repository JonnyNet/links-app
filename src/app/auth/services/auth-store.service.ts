import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, mergeMap, tap } from 'rxjs/operators';
import { URLS_APP } from 'src/app/shared/consts/urls-app';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Store } from 'src/app/shared/store/store';
import { AuthState } from '../models/auth-state';
import { User } from '../models/user';
import { UserAuth, UserRegister } from '../models/user-auth';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

const TOKEN = 'Token';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService extends Store<AuthState>{

  readonly error$ = this.state$.pipe(map(x => x.error));
  readonly user$ = this.state$.pipe(map(x => x.user as User));

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private helper: HelperService,
    private router: Router,
  ) {
    super({
      user: undefined,
      error: undefined,
    });
  }

  saveUser(user: UserRegister): void {
    this.authService.saveUser(user).subscribe((res) => {
      this.router.navigate([URLS_APP.AUTH.SING_IN]);
    }, () => this.setErrorState());
  }

  userAuth(user: UserAuth): void {
    this.authService.authUser(user)
      .pipe(
        tap((res: string) => this.localStorageService.set(TOKEN, res)),
        mergeMap(res => this.authService.findUser('1')),
      ).subscribe((response: User) => {
        this.setUsetState(response);
        this.router.navigate([URLS_APP.LINK.LIST]);
      }, () => this.setErrorState());
  }

  user(): void {
    if (this.state.user !== undefined) {
      this.setState({
        ...this.state,
      });
      return;
    }
    this.authService.findUser('1').subscribe(res => this.setUsetState(res));
  }

  logOut(): void {
    this.localStorageService.remove(TOKEN);
    this.router.navigate([URLS_APP.AUTH.SING_IN]);
  }

  get isAuthenticated(): boolean {
    return this.localStorageService.get(TOKEN) !== null;
  }

  private setUsetState(response: User) {
    this.setState({
      ...this.state,
      user: response,
      error: undefined,
    });
  }

  private setErrorState(): void {
    this.setState({
      ...this.state,
      error: 'Ha ocurrido un error, por favor inténtelo de nuevo más tarde',
    });
  }
}
