import { Component, OnInit } from '@angular/core';

import {Questao} from './questao.model';
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
    meta: Meta;
    back: number = 1;
    next: number = 2;

    constructor(private questaoService: QuestaoService,
                private notificacaoService: NotificacaoService,
                private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.questaoService.getQuestao(2).subscribe(
            response => {
                this.questoes = response['data'];
                console.log(response);
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

    backPage(pag: number): void{
        if (this.back > 1) {
            this.back--;
            this.next--;
        }
        this.questaoService.getQuestao(pag).subscribe(
            response => {
                this.questoes = response['data'];
                this.meta = response['meta'];
            }
        );
    }

    nextPag(pag: number): void{
        if (this.next < this.meta.last_page)
            this.back++
        this.next++
        this.questaoService.getQuestao(pag).subscribe(
            response => {
                this.questoes = response['data'];
                this.meta = response['meta'];
            }
        )
    }

    init() {

    }

}

class Meta {
    current_page: number
    from: number
    last_page: number
    total: number
}