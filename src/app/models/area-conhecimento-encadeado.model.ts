export interface AreaConhecimentoEncadeado {
    position: boolean
    id: number
    area_de_conhecimento: string
    sub_categoria_id: AreaConhecimentoEncadeado[]
    material_icon: string
    material_check: boolean
}