import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

// import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmlzdHJhdG9yIiwiYXV0aCI6IlJPTEVfQURNSU4sUk9MRV9VU0VSIiwiZXhwIjoxNzAwMjI5MjI2fQ.KLLKkJLZRX1jFDRfxYbcj8CCzdBX3g65_f6YG9KEt-AmbUeSNSxu1f223WAXeo8xZkXAMDh2vlCuI-ylWJmpog';

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    });
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}