import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entrar/model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario
    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão diferentes.')
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuário criado com sucesso!')
      })
    }
  }

}

  /*Opção de validação do campo nome. Conversor de Javascrip para Type Script.
  
  validaNome(){
    let nome = (<HTMLInputElement>document.querySelector('#nome')).value
    if(nome?.length < 5){
      alert('nome muito pequeno')
    }else{
      alert('nome ok')
    }
  } */



