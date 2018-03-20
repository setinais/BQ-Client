import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {NotificacaoService} from '../services/notificacao.service';
import {ActivatedRoute, Router} from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificacao: NotificacaoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      if(this.loginService.isLoggedIn())
          this.router.navigate(['/usuario']);
      $.material.init();
     this.loginForm = this.fb.group({
          username: this.fb.control('',[Validators.required, Validators.email]),
          password: this.fb.control('',[Validators.required])
      });

     this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/usuario');
  }
  login(login){
      this.loginService.login(login.username, login.password, true)
          .subscribe(response => this.notificacao.showNotification('Login com sucesso :) ', 'success'),
              error => console.log(error) ,
              () => {
                this.router.navigate([atob(this.navigateTo)]);
              });
  }

}
