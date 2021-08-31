import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../entrar/model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../entrar/model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

/*Integração do Front-end com o Back-end*/
  constructor(private http: HttpClient) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogpessoaljonatas.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoaljonatas.herokuapp.com/usuarios/cadastrar', usuario)
  }

  /*Método para validação do token*/
  logado(){
    let ok: boolean = false

    if(environment.token != ''){
    ok = true
    }
    return ok
  }
}
