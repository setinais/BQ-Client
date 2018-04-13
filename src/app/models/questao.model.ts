import {AreaConhecimento} from './area-conhecimento.model';

export interface Questao{
    id: number,
    enunciado: string,
    alternativas: string[],
    alternativa_correta: number,
    nivel: number,
    sub_categoria: AreaConhecimento[] | number,
    professor_id: number
}