import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserAuth, UserRegister } from '../models/user-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server = environment.urlAuth;

  constructor(private http: HttpClient) { }

  saveUser(user: UserRegister): Observable<string> {
    return this.http.post<string>(this.server + 'register', user);
  }

  findUser(id: string): Observable<User> {
    return this.http.get<User>(this.server + 'user/' + id);
  }

  authUser(user: UserAuth): Observable<string> {
    return this.http.post<string>(this.server + 'login', user);
  }
}
