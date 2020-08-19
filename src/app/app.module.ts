import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';

import { NgBrazil, TextMask } from 'ng-brazil';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { CadastroComponent } from './conta/cadastro/cadastro.component';
import { LoginComponent } from './conta/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NavegacaoModule,
    ReactiveFormsModule,
    FormsModule,
    NgBrazil,
    TextMask.TextMaskModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
