import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AllHttpService } from './all-http.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    public allHttpService: AllHttpService,
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.allHttpService.getToken()}`,
      },
    });

    return next.handle(req);
  }
}
