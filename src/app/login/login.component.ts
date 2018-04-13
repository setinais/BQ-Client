import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificacaoService} from '../services/notificacao.service';
import {LoginService} from '../services/login.service';
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private notificacao: NotificacaoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        localStorage.clear();
        this.loginService.login('3@3.com','123456',true).subscribe(r => {this.router.navigate([atob(btoa('/usuario/questao'))]);});
        $.material.init();
        this.loginForm = this.fb.group({
            username: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [Validators.required])
        });
        if (this.loginService.isLoggedIn()) {
            this.router.navigate(['/usuario']);
        }
        this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/usuario');
    }
    login(login){
        this.loginService.login(login.username, login.password, true)
            .subscribe(response => this.notificacao.showNotification('Login com sucesso :) ', 'success'),
                error => this.notificacao.showNotification('Login/Senha incorretos!', 'danger')
                     ,
                () => {
                    this.router.navigate([atob(this.navigateTo)]);
                });
    }

}
