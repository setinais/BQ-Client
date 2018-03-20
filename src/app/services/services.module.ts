import {NgModule} from '@angular/core';
import {QuestaoService} from './questao.service';
import {NotificacaoService} from './notificacao.service';
import {AreaConhecimentoService} from './areaconhecimento.service';
import { UsuarioService} from './usuario.service';
import {AuthService} from './auth.service';
import {LoginService} from './login.service';

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [
        QuestaoService,
        NotificacaoService,
        AreaConhecimentoService,
        UsuarioService,
        AuthService,
        LoginService
    ]
})

export class ServicesModule{}
