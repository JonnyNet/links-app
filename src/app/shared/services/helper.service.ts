import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private loading = new Subject<boolean>();

  constructor() { }

  chageStateLoad(state: boolean): void {
    setTimeout(() => { this.loading.next(state); }, 0);
  }

  stateLoad(): Observable<boolean> {
    return this.loading.asObservable();
  }

}
