import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {URL_API} from '../urls';

import {AreaConhecimento} from '../models/area-conhecimento.model';
import {AreaConhecimentoEncadeado} from '../models/area-conhecimento-encadeado.model';

@Injectable()
export class AreaConhecimentoService {

    constructor(private http: HttpClient) {}


    getAreaConhecimento(): Observable<AreaConhecimento[]>{
        return this.http.get<AreaConhecimento[]>(`${URL_API}/api/area-conhecimento/categorias`)
    }

    getSubCategoria(id: number,pag?: number): Observable<AreaConhecimento[]>{
        let params: HttpParams = undefined;
        if(pag){
            params = new HttpParams().set('page', pag.toString())
        }
        return this.http.get<AreaConhecimento[]>(`${URL_API}/api/area-conhecimento/sub-categorias/${id}`, {params: params})
    }

    addAreaConhecimento(areaConhecimento: AreaConhecimento): Observable<any>{
        return this.http.post<any>(`${URL_API}/api/area-conhecimento`, areaConhecimento);
    }

    deleteAreaConhecimento(areaConhecimento: AreaConhecimento | number): Observable<AreaConhecimento> {
        const id = typeof areaConhecimento === 'number' ? areaConhecimento : areaConhecimento.id;
        return this.http.delete<AreaConhecimento>(`${URL_API}/api/area-conhecimento/${id}`)
    }

    getAreasEncadeada(): Observable<AreaConhecimentoEncadeado[]> {
        return this.http.get<AreaConhecimentoEncadeado[]>(`${URL_API}/api/area-conhecimento/areas-encadeadas`);
    }
}