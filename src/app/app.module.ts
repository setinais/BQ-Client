import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import {httpInterceptorsProviders} from './http-intercepter/intercepter';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AplicationErrorHandler} from './app-error-handler';
import {SharedModule} from './shared/shared.module';
import {ServicesModule} from './services/services.module';
import { UsuarioProfModule } from './usuario-prof/usuario-prof.module';
import { IndexComponent } from './index/index.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {LoginComponent} from './login/login.component';
import { Ng4FilesModule } from 'ng4-files';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    ServicesModule,
    UsuarioProfModule,
    Ng4FilesModule,
    AppRoutingModule,
  ],
  providers: [httpInterceptorsProviders, {provide: LocationStrategy, useClass: HashLocationStrategy},
      {provide: ErrorHandler, useClass: AplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
