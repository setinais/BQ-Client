import {Component, OnInit} from '@angular/core';
import {QntdQuestao} from '../../models/qntd-questao.model';

@Component({
    selector: 'app-prova',
    templateUrl: './prova.component.html',
    styleUrls: ['./prova.component.css']
})

export class ProvaComponent implements OnInit {

    selecionadas = false;
    ids: QntdQuestao;


    constructor(){
        this.ids = new QntdQuestao;
    }

    ngOnInit(){

    }

    toogle(){
        if(this.selecionadas === false){
            this.selecionadas = true;
        } else {
            this.selecionadas = false;
        }
    }

    setId(id: QntdQuestao){
        this.ids = id;
    }
}