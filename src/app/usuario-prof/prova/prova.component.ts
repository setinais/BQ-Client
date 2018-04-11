import {Component, OnInit} from '@angular/core';
import {AreaConhecimentoEncadeado} from '../../models/area-conhecimento-encadeado.model';
import {AreaConhecimentoService} from '../../services/areaconhecimento.service';

@Component({
    selector: 'app-prova',
    templateUrl: './prova.component.html',
    styleUrls: ['./prova.component.css']
})

export class ProvaComponent implements OnInit {

    material_icon: string = 'add';

    areas_conhecimentos: AreaConhecimentoEncadeado[];

    constructor(private areaService: AreaConhecimentoService){}

    ngOnInit(){
        this.areaService.getAreasEncadeada().subscribe(response =>{
            this.areas_conhecimentos = response;
            console.log(this.areas_conhecimentos);
        });
    }

    dropDown(){
        this.material_icon = 'remove';
    }
    selected(){
        console.log('few')
    }
}