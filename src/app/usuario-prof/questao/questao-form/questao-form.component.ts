import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Questao} from '../../../models/questao.model';
import {AreaConhecimento} from '../../../models/area-conhecimento.model';
import {QuestaoService} from '../../../services/questao.service';
import {NotificacaoService} from '../../../services/notificacao.service';
import {AreaConhecimentoService} from '../../../services/areaconhecimento.service';

@Component({
    selector: 'app-questao-form',
    templateUrl: './questao-form.component.html'
})
export class QuestaoFormComponent implements OnInit {

    questaoForm: FormGroup
    questoes: Questao
    disciplinas: AreaConhecimento[]
    subs: AreaConhecimento[]

    constructor(private fb: FormBuilder,
                private questaoService: QuestaoService,
                private notificationsService: NotificacaoService,
                private areaconhecimentoService: AreaConhecimentoService) { }

    ngOnInit() {
        this.areaconhecimentoService.getAreaConhecimento().subscribe(response => {
            this.disciplinas = response;
        });


        this.questaoForm = this.fb.group({
            enunciado: this.fb.control('',[Validators.required]),
            alternativa_correta: this.fb.control('',[Validators.required]),
            alternativa1: this.fb.control('',[Validators.required]),
            alternativa2: this.fb.control('',[Validators.required]),
            alternativa3: this.fb.control('',[Validators.required]),
            alternativa4: this.fb.control('',[Validators.required]),
            alternativa5: this.fb.control('',[Validators.required]),
            disciplina_id: this.fb.control('',[Validators.required]),
            sub_id: this.fb.control('',[Validators.required])
        });

    }

    subGet() {
        this.areaconhecimentoService.getSubCategoria(this.questaoForm.value.disciplina_id).subscribe(response => {
            this.subs = response
        })
    }
    addQuestao(questao: Questao) {
        questao.alternativas = [questao['alternativa1'], questao['alternativa2'], questao['alternativa3'], questao['alternativa4'], questao['alternativa5'] ];
        questao.nivel = 2;
        questao.professor_id = 3;
        questao.sub_categoria = [questao['sub_id']]
        console.log(questao);
        this.questaoService.addQuestao(questao)
            .subscribe((response) => {
                if(response.error){
                    console.log('fe')
                    console.log(response)
                } else {
                    this.questaoForm.reset()
                    this.notificationsService.showNotification(`Questao cadastrado com sucesso!`, 'success')

                }
            })
    }
}
