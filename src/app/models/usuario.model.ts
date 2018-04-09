import {Professor} from './Professor.model';

export interface Usuario{
    id: number
    email: string
    name: string
    sexo: string
    telefone: number
    info_client: number
    professor: Professor
}