import {NgModule} from '@angular/core';
import {ProvaComponent} from './prova.component';
import {SharedModule} from '../../shared/shared.module';
import {SelecionadasComponent} from './selecionadas/selecionadas.component';
import {PesquisarComponent} from './pesquisar/pesquisar.component';


@NgModule({
    declarations: [ProvaComponent, SelecionadasComponent, PesquisarComponent],
    imports: [SharedModule]
})

export class ProvaModule{}