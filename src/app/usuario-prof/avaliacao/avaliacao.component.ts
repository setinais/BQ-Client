import {Component, OnInit} from '@angular/core';
import {ProfessorService} from '../../services/professor.service';
import {Professor} from '../../models/Professor.model';

@Component({
    selector: 'app-avaliacao',
    templateUrl: './avaliacao.component.html',
    styleUrls: ['./avaliacao.component.css']
})

export class AvaliacaoComponent implements OnInit{

    prof: Professor[]

    constructor(private pro: ProfessorService){}

    ngOnInit(){
        this.pro.getPendentes().subscribe(response => {
            this.prof = response;
        });
    }
}