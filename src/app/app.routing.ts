import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {AppCustomPreloader} from './AppPreloader';



const routes: Routes =[
    { path: '',               component: IndexComponent},
    {path: 'login/:to',       component: LoginComponent},
    { path: 'login',          component: LoginComponent},
    { path: 'cadastro',       component: CadastroComponent, data: {preload: true}}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ enableTracing: false, preloadingStrategy: AppCustomPreloader })
  ],
  exports: [
  ],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
