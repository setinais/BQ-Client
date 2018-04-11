import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Usuario} from '../models/usuario.model';
import {URL_API} from '../urls';
import {LoginService} from './login.service';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    addUser(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${URL_API}/api/usuario`, usuario)
    }

    addProf(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${URL_API}/api/professor`, usuario)

    }

    getUser(): Observable<Usuario> {
        return this.http.get<Usuario>(`${URL_API}/api/controle-acesso/guard`)
    }

    editUser(usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${URL_API}/api/usuario/${usuario.id}}`, usuario)
    }
    editProf(usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${URL_API}/api/professor/${usuario.id}}`, usuario)
    }
}

