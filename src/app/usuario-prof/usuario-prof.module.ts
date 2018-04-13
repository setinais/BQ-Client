import {NgModule} from '@angular/core';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ComponentsModule} from './components/components.module';
import {RouterModule, Routes} from '@angular/router';
import {QuestaoModule} from './questao/questao.module';
import {UsuarioProfComponent} from './usuario-prof.component';
import {QuestaoComponent} from './questao/questao.component';
import {LoggedInGuard} from '../login/log.guard';
import {UserProfileModule} from './user-profile/user-profile.module';
import {ProvaComponent} from './prova/prova.component';
import {ProvaModule} from './prova/prova.module';

const ROUTES: Routes = [
    { path: 'usuario', component: UsuarioProfComponent, children: [
            {path: '', redirectTo: '/usuario/dash' , pathMatch: 'full'},
            { path: 'dash',      component: DashboardComponent },
            { path: 'questao', component: QuestaoComponent},
            { path: 'prova', component: ProvaComponent },
            { path: 'user-profile',   component: UserProfileComponent },

        ], canActivate: [LoggedInGuard]},
];

@NgModule({
    declarations: [
        DashboardComponent,
        UsuarioProfComponent],
    imports: [ComponentsModule, QuestaoModule, RouterModule.forChild(ROUTES), UserProfileModule, ProvaModule],
    exports: [],
    providers: [LoggedInGuard]
})

export class UsuarioProfModule {

}
