import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AreaConhecimentoEncadeado} from '../../../models/area-conhecimento-encadeado.model';
import {AreaConhecimentoService} from '../../../services/areaconhecimento.service';
import {QntdQuestao} from '../../../models/qntd-questao.model';

@Component({
    selector: 'app-pesquisar',
    templateUrl: './pesquisar.component.html',
    styleUrls: ['./pesquisar.component.css']
})

export class PesquisarComponent implements OnInit {

    idSelected: number;
    areas_conhecimentos: AreaConhecimentoEncadeado[];
    areas_selected: any[] = [];
    qntd_questao: QntdQuestao;

    @Output() setId = new EventEmitter<QntdQuestao>();
    @Output() toogle = new EventEmitter();

    constructor(private areaService: AreaConhecimentoService){}

    ngOnInit(){
        this.qntd_questao = new QntdQuestao;
        this.qntd_questao.qntd = 0;
        this.areaService.getAreasEncadeada().subscribe(response =>{
            this.areas_conhecimentos = response;
        }, error => {
            console.log(error);
        });
    }

    emitSetId() {
        if(this.qntd_questao.ids !== undefined ){
            this.setId.emit(this.qntd_questao);
            this.emitToogle();
        }
    }
    emitToogle() {
        this.toogle.emit();
    }
    dropDown(id: number){
        if (id === this.idSelected) {
            this.idSelected = undefined;
        } else {
            this.idSelected = id;
        }

    }
    selected(area: AreaConhecimentoEncadeado){
        if(this.areas_selected[area.id] === undefined){
            this.areas_selected[area.id] = area;
            if (area.sub_categoria_id !== undefined) {
                for (const categorias of area.sub_categoria_id) {
                    this.areas_selected[categorias.id] = categorias;
                }
            } else {
                this.areas_selected[area.id] = area;
            }
        } else {
            this.areas_selected[area.id] = undefined;
            if(area.sub_categoria_id !== undefined) {
                for (const categorias of area.sub_categoria_id) {
                    this.areas_selected[categorias.id] = undefined;
                }
            }
        }
        this.getQtndQuestao();
    }

    getQtndQuestao() {
        const ids: number[] = [];
        let i = 0;
        if(this.areas_selected !== undefined) {
            for (const getIds of this.areas_selected) {
                if (getIds !== undefined) {
                    ids[i] = getIds.id;
                    i++;
                }
            }
            this.qntd_questao.ids = ids;
            this.areaService.getQntdQuestao(this.qntd_questao).subscribe(response => {
                this.qntd_questao.qntd = response.qntd;
            }, error => {

            });
        }
    }
}