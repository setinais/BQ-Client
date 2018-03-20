import {NgModule} from '@angular/core';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ComponentsModule} from './components/components.module';
import {RouterModule, Routes} from '@angular/router';
import {QuestaoModule} from './questao/questao.module';
import {UsuarioProfComponent} from './usuario-prof.component';
import {QuestaoComponent} from './questao/questao.component';

const ROUTES: Routes = [
    { path: 'usuario', component: UsuarioProfComponent, children: [
            { path: '',      component: DashboardComponent },
            { path: 'questao', component: QuestaoComponent},
            { path: 'user-profile',   component: UserProfileComponent },
        ]},
];

@NgModule({
    declarations: [
        UserProfileComponent,
        DashboardComponent,
        UsuarioProfComponent],
    imports: [ ComponentsModule, QuestaoModule, RouterModule.forChild(ROUTES)],
    exports: []
})

export class UsuarioProfModule{

}
