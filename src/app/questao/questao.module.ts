import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

import {QuestaoComponent} from './questao.component';
import {QuestaoListComponent} from './questao-list/questao-list.component';
import {QuestaoFormComponent} from './questao-form/questao-form.component';
import {QuestaoListAllComponent} from './questao-list-all/questao-list-all.component';
import {QuestaoProvaComponent} from './questao-prova/questao-prova.component';

const ROUTES: Routes = [
    {path: '', component: QuestaoComponent},
];

@NgModule({
    declarations: [QuestaoComponent, QuestaoListComponent, QuestaoFormComponent, QuestaoListAllComponent, QuestaoProvaComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class QuestaoModule {}