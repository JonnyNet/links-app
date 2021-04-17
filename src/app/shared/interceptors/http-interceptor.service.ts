import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { URLS_APP } from '../consts/urls-app';
import { HelperService } from '../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private request: boolean[] = [];

  constructor(private service: HelperService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoad();
    return next.handle(request).pipe(
      filter((event: any) => event instanceof HttpResponse),
      tap(() => this.hideLoad()),
      catchError((err: HttpErrorResponse) => {
        this.hideLoad();
        if (err.status !== 400) {
          this.router.navigate([URLS_APP.ERRORS.E500]);
        }
        return throwError(err);
      })
    );
  }

  private showLoad(): void {
    this.request.push(true);
    if (this.request.length !== 1) { return; }
    this.service.chageStateLoad(true);
  }

  private hideLoad(): void {
    this.request.splice(0, 1);
    if (this.request.length === 0) {
      this.service.chageStateLoad(false);
    }
  }
}

