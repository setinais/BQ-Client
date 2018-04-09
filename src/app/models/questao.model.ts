import {AreaConhecimento} from './area-conhecimento.model';

export interface Questao{
    id: number,
    enunciado: string,
    alternativas: string[],
    nivel: number,
    sub_categoria: AreaConhecimento[],
    disciplina_id: AreaConhecimento,
    professor_id: number
}