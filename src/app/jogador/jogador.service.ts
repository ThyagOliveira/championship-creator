import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { JogadorComponent } from './jogador.component'
import { Jogador } from './jogador'

@Injectable()
export class JogadorService {

  private jogadoresUrl = 'http://localhost:4200/api';
  private headers = new Headers(
    {'Content-Type':'aplication/x-www-form-urlencoded '}
  );

  handleError : any;

  getJogadores(): Promise<Jogador[]> {
    return this.http.get(this.jogadoresUrl)
    .toPromise()
    .then(response => response.json() as Jogador[])
    .catch(this.handleError);
  }

  getJogador(nome: string): Promise<Jogador[]> {
    return this.http.get(this.jogadoresUrl)
    .toPromise()
    .then(response => response.json() as Jogador[])
    .catch(this.handleError);

  }

  createJogador(id: number, nome: string, role: string): Promise<Jogador> {
    var jogador = {id: 0, nome: nome, role: role};
    
    return this.http.post(this.jogadoresUrl, JSON.stringify(jogador), {
      headers: this.headers})
      .toPromise()
      .then(res => res.json() as Jogador)
      .catch(this.handleError);

  }

  updateJogador(jogador: Jogador): Promise<Jogador> {
    const url =`${this.jogadoresUrl}/${jogador.id}`;
    
    return this.http.put(url, JSON.stringify(jogador))
    .toPromise()
    .then(() => jogador)
    .catch(this.handleError);
  }

  deleteJogador(id: number): Promise<void> {
    const url = `${this.jogadoresUrl}/${id}`;

    return this.http.delete(url, { headers: this.headers })
    .toPromise()
    .then(() => null)
    .catch(this.handleError);

  }

  constructor(private http: Http) { }

}
