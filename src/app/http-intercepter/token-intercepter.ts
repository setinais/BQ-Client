import {Injectable, Injector} from '@angular/core'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import {LoginService} from '../services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const loginService = this.injector.get(LoginService);
        const tokenacess = JSON.parse(localStorage.getItem('token'))
        if (loginService.isLoggedIn()) {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenacess.access_token}`
                })
            };

            const request = req.clone(httpOptions);
            return next.handle(request);
        } else {
            return next.handle(req);
        }
    }
}