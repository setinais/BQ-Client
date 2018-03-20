import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/do';

import {Router} from '@angular/router';
import {ClientPassword} from '../login/client_password.model';
import {ClientCredentials} from '../login/client_credentials.model';
import {Usuario} from '../usuario-prof/user-profile/usuario.model';
import {Token} from '../login/token.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

    user: Usuario;
    token: Token;
    client_password: ClientPassword = {
        grant_type: 'password',
        client_id : 3,
        client_secret : 'HAV4Y3blSQA5qPhPW41REIkWhBO6qzZAF3H7rx7P',
        username: '',
        password: ''
    };
    client_credentials: ClientCredentials = {
        grant_type : 'client_credentials',
        client_id : 3,
        client_secret : 'HAV4Y3blSQA5qPhPW41REIkWhBO6qzZAF3H7rx7P'
    };

    constructor(private http: HttpClient,
                private router: Router,
                ) {}

    isLoggedIn(): boolean {
        return this.token !== undefined
    }

    login(email: string, password: string, type: boolean): Observable<Token> {
        if(type){
            this.client_password.username = email
            this.client_password.password = password
            return this.http.post<Token>(`http://localhost:8000/oauth/token`, this.client_password)
                .do( token => this.token = token);
        }else{
            return this.http.post<Token>(`http://localhost:8000/oauth/token`, this.client_credentials)
                .do( token => this.token = token);
        }
    }

    handleLogin(path?: string) {
        this.router.navigate(['/login', btoa(path)]);
    }

    logout() {
        this.user = undefined;
        this.token = undefined;
        this.handleLogin('/');
    }
}