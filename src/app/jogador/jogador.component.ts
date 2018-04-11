import { Component, OnInit } from '@angular/core';

import { JogadorService } from "./jogador.service";
import { Jogador } from "./jogador";

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  providers: [JogadorService],
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {
  
  id: number;
  nome: string;
  role: string;

  jogador: Jogador = {id: 0, nome: '', role: ''};
  jogadores = Jogador[0];

  constructor(private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.getJogadores();
  }

  getJogadores(): void {
    this.jogadorService.getJogadores().then(j => this.jogadores = j);
  }

  inserirJogadores(id: number, nome: string, role: string): void{
    this.nome = this.nome.trim();

    if (!this.nome){
      return;
    }
    this.jogadorService.createJogador(id,nome, role)
    .then(jogador => {
      this.jogadores.push(jogador);
    }); 
  }

  removerJogadores(id): void {
    this.jogadorService
    .deleteJogador(id)
    .then(() => {
      this.jogadores = this.jogadores.filter(j => j.id !== id);
    });
  }

}
