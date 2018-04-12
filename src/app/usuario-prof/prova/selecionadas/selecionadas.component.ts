import {Component, Input, OnInit} from '@angular/core';
import {QntdQuestao} from '../../../models/qntd-questao.model';
import {AreaConhecimentoService} from '../../../services/areaconhecimento.service';
import {Questao} from '../../../models/questao.model';

@Component({
  selector: 'app-selecionadas',
  templateUrl: './selecionadas.component.html',
  styleUrls: ['./selecionadas.component.scss']
})
export class SelecionadasComponent implements OnInit {

  @Input() ids: QntdQuestao;
  questoes: Questao[];
  questoes_selected: Questao[] = [];
  qntd_qs = 0;
  pagina = 1;
  checkd = true;
  constructor(private areaService: AreaConhecimentoService) {  }

  ngOnInit() {
    this.getQuestoes();

  }

  getQuestoes(){
      this.areaService.getQuestoesProva(this.ids).subscribe(response => {
          this.questoes = response;
          console.log(this.questoes);
      }, error => {
          console.log(error)
      });
  }

  statusCheckBox(q: Questao){
    if(this.questoes_selected.indexOf(q) === -1){
      return false;
    } else {
      return true;
    }
  }

  addQS(q: Questao){

    if(this.questoes_selected.indexOf(q) === -1){
      this.questoes_selected.push(q);
      this.qntd_qs++;
    } else {
      this.removeQS(q);
    }
  }

  removeQS(q: Questao){
    const i = this.questoes_selected.indexOf(q);
    this.questoes_selected.splice(i, 1);
    this.qntd_qs--;
  }

  proximo(){
    if(this.pagina < this.ids.qntd){
      this.pagina++;
    }

  }

  anterior(){
    if(this.pagina >= 2){
      this.pagina--;
    }
  }
}
