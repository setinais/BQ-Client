import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {QuestaoComponent} from './questao.component';
import {QuestaoListComponent} from './questao-list/questao-list.component';
import {QuestaoFormComponent} from './questao-form/questao-form.component';
import {QuestaoListAllComponent} from './questao-list-all/questao-list-all.component';


@NgModule({
    declarations: [QuestaoComponent, QuestaoListComponent, QuestaoFormComponent, QuestaoListAllComponent],
    imports: [SharedModule]
})
export class QuestaoModule {}