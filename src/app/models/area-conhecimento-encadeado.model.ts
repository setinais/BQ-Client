export interface AreaConhecimentoEncadeado {
    position: boolean
    id: number
    area_de_conhecimento: string
    subcategoria: AreaConhecimentoEncadeado[]
    material_icon: string
    material_check: boolean
}