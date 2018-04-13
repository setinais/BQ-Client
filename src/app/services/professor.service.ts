import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Professor} from '../models/Professor.model';
import {URL_API} from '../urls';

@Injectable()
export class ProfessorService {

    constructor(private http: HttpClient) {
    }

    getPendentes(): Observable<Professor[]> {
        return this.http.get<Professor[]>(`${URL_API}/api/professor`);
    }
}