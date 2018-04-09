import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/do';
import {URL_API} from '../urls';
import {Router} from '@angular/router';
import {ClientPassword} from '../models/client_password.model';
import {ClientCredentials} from '../models/client_credentials.model';
import {Token} from '../models/token.model';
import {Observable} from 'rxjs/Observable';
import {Guard} from '../models/guard.model';
import {Usuario} from '../models/usuario.model';

@Injectable()
export class LoginService {

    isLoggin: boolean;
    client_password: ClientPassword = {
        grant_type: 'password',
        client_id : 3,
        client_secret : 'OVGbYEuXmZnejENsAHhYcroSKQszQz9KI69LSgzf',
        username: '',
        password: ''
    };
    client_credentials: ClientCredentials = {
        grant_type : 'client_credentials',
        client_id : 3,
        client_secret : 'OVGbYEuXmZnejENsAHhYcroSKQszQz9KI69LSgzf'
    };

    constructor(private http: HttpClient,
                private router: Router
                ) { this.isLoggin = false }

    isLoggedIn(): boolean {
        return this.isLoggin;
    }

    login(email: string, password: string, type: boolean): Observable<Token> {
        if(type){
            this.client_password.username = email
            this.client_password.password = password
            return this.http.post<Token>(`${URL_API}/oauth/token`, this.client_password)
                .do( token => {
                        console.log(this.isLoggin);
                        localStorage.setItem('token', JSON.stringify(token));
                        localStorage.setItem('status', 'true');
                        this.isLoggin = true;
                        this.getGuard().subscribe(response => { }, error => {});
                    }
                );
        }else{
            return this.http.post<Token>(`${URL_API}/oauth/token`, this.client_credentials)
                .do( token => localStorage.setItem('token', JSON.stringify(token)) );
        }
    }

    handleLogin(path?: string) {
        this.router.navigate(['/login', btoa(path)]);
    }

    logout() {
        this.isLoggin = false;
        localStorage.clear();
        this.handleLogin('/');
    }

    getGuard(): Observable<Guard> {
        return this.http.get<Guard>(`${URL_API}/api/controle-acesso/guard`).do(
            response => {
                localStorage.setItem('user', JSON.stringify(response.user));
                localStorage.setItem('acesso', JSON.stringify(response.acesso));
            }, error => {
                this.handleLogin('/login');
            })
    }
}