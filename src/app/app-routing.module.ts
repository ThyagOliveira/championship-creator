import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { TimeComponent } from "./time/time.component";
import { JogadorComponent } from "./jogador/jogador.component";
import { NoticiasComponent } from './noticias/noticias.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { CriarTimeComponent } from "./time/criar-time/criar-time.component";
import { RemoverTimeComponent } from "./time/remover-time/remover-time.component";
import { AtualizarTimeComponent } from "./time/atualizar-time/atualizar-time.component";
import { CriarJogadorComponent } from "./jogador/criar-jogador/criar-jogador.component";
import { AtualizarJogadorComponent } from "./jogador/atualizar-jogador/atualizar-jogador.component";
import { RemoverJogadorComponent } from "./jogador/remover-jogador/remover-jogador.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'noticias', component: NoticiasComponent },
  { path: 'cadastro', component: FormularioCadastroComponent },
  { path: 'times', component: TimeComponent },
  { path: 'jogadores', component: JogadorComponent },
  { path: 'criarTime', component: CriarTimeComponent },
  { path: 'atualizarTime', component: AtualizarTimeComponent },
  { path: 'removerTime', component: RemoverTimeComponent },
  { path: 'criarJogador', component: CriarJogadorComponent },
  { path: 'atualizarJogador', component: AtualizarJogadorComponent },
  { path: 'removerJogador', component: RemoverJogadorComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
