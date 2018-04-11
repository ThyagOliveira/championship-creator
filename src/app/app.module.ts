import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./login/auth.service";
import { TimeComponent } from './time/time.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TimeService } from "./time/time.service";
import { JogadorComponent } from './jogador/jogador.component';
import { CriarTimeComponent } from './time/criar-time/criar-time.component';
import { RemoverTimeComponent } from './time/remover-time/remover-time.component';
import { AtualizarTimeComponent } from './time/atualizar-time/atualizar-time.component';
import { CriarJogadorComponent } from './jogador/criar-jogador/criar-jogador.component';
import { AtualizarJogadorComponent } from './jogador/atualizar-jogador/atualizar-jogador.component';
import { RemoverJogadorComponent } from './jogador/remover-jogador/remover-jogador.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioCadastroComponent,
    NoticiasComponent,
    LoginComponent,
    TimeComponent,
    PerfilComponent,
    JogadorComponent,
    CriarTimeComponent,
    RemoverTimeComponent,
    AtualizarTimeComponent,
    CriarJogadorComponent,
    AtualizarJogadorComponent,
    RemoverJogadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
