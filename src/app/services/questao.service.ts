import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {URL_API} from '../urls';

import {Questao} from '../usuario-prof/questao/questao.model';

@Injectable()
export class QuestaoService {

    constructor(private http: HttpClient) {}


    getQuestaoAll(pag?: number): Observable<Questao[]>{
        console.log(URL_API);
        let params: HttpParams = undefined;
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Questao[]>(`${URL_API}/questao`, {params: params})
    }

    getQuestao(id: number,pag?: number): Observable<Questao[]>{
        let params: HttpParams = undefined;
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<Questao[]>(`${URL_API}/questao/${id}`, {params: params})
    }

    addQuestao(questao: Questao): Observable<any>{
        return this.http.post<any>(`${URL_API}/questao`, questao);
    }

    deleteQuestao(questao: Questao | number): Observable<Questao> {
        const id = typeof questao === 'number' ? questao : questao.id;
        return this.http.delete<Questao>(`${URL_API}/questao/${id}`)
    }

}