import {Component, OnInit, Input, Output} from '@angular/core';
import {Questao} from '../questao.model';
import {QuestaoService} from '../../services/questao.service';

@Component({
    selector: 'app-questao-prova',
    templateUrl: './questao-prova.component.html',
})
export class QuestaoProvaComponent implements OnInit {

    questoesAlls: Questao[];
    questoesProvas: Questao[];

    constructor(private questaoService: QuestaoService) {
    }

    ngOnInit() {
        this.questaoService.getQuestaoAll().subscribe(response => {
            this.questoesAlls = response['data'];
        });
    }

    addQuestao(questao: Questao)
    {
        this.questoesAlls = this.questoesAlls.filter(s => s !== questao);
        this.questoesProvas = [questao];
    }
}
