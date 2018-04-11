import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { Usuario } from "./usuario";

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){

      this.usuarioAutenticado = true;
    }else{
      this.usuarioAutenticado = false;
    }
  }
}
