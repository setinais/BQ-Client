import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

import {Questao} from '../questao.model';

@Component({
    selector: 'app-questao-list',
    templateUrl: './questao-list.component.html',
})
export class QuestaoListComponent implements OnInit {

    @Input() questoes: Questao;
    @Output() delete = new EventEmitter<Questao>();
    @Output() edit = new EventEmitter<Questao>();

    constructor() {
    }

    ngOnInit() {
    }

    emitDelete(questao: Questao) {
        this.delete.emit(questao);
    }

    emitEdit(questao: Questao) {
        this.edit.emit(questao);
    }
}
