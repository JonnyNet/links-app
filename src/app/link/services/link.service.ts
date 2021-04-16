import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Link } from 'src/app/shared/models/link';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Link[]> {
    return this.http.get<Link[]>('assets/mocks/links.mock.json')
      .pipe(delay(2000));
  }

  deleteLink(id: string): Observable<string> {
    return of(id).pipe(delay(2000));
  }

  saveLink(link: Link): Observable<Link> {
    link.id = UUID.UUID();
    link.createdAt = new Date();
    return of(link).pipe(delay(2000));
  }
}
