import { Component, OnInit } from '@angular/core';

import {Questao} from '../../models/questao.model';
import {QuestaoService} from '../../services/questao.service';
import {NotificacaoService} from '../../services/notificacao.service';
import {UsuarioService} from '../../services/usuario.service';


@Component({
    selector: 'app-questao',
    templateUrl: './questao.component.html',
    styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

    questoesAlls: Questao[];
    questoes: Questao[];

    constructor(private questaoService: QuestaoService,
                private notificacaoService: NotificacaoService ) { }

    ngOnInit() {

    }
    getQuestaoProf(){
        this.questaoService.getQuestao(2).subscribe(
            response => {
                this.questoes = response['data'];
            }
        );
    }
    getAllQuestao() {
        this.questaoService.getQuestaoAll().subscribe(response => {
            this.questoesAlls = response['data'];
        })
    }
    delete(questao: Questao) {
        this.questoes = this.questoes.filter(s => s !== questao);
        this.questaoService.deleteQuestao(questao.id).subscribe(response =>
            this.notificacaoService.showNotification(`Questão excluído com sucesso!`, 'success')
        );
    }

    edit(questao: Questao) {
        console.log(`edit #{status.name}`)
    }
}
