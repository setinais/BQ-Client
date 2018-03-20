import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

import {Questao} from '../questao.model';

@Component({
    selector: 'app-questao-list-all',
    templateUrl: './questao-list-all.component.html',
})
export class QuestaoListAllComponent implements OnInit {

    @Input() questoesAlls: Questao;


    constructor() {
    }

    ngOnInit() {
    }

}
