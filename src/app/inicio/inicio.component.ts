import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../entrar/model/Postagem';
import { Tema } from '../entrar/model/Tema';
import { Usuario } from '../entrar/model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]


//estrangeiras
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number



  usuario: Usuario = new Usuario()
  idUser = environment.id



  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService,
    private alertas: AlertasService
    ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == ''){
      //alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    this.findAllTemas()
    this.getAllPostagens()
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
    this.listaTemas = resp
    })
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findByIdUser(){
    this.authService.getUserById(this.idUser).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

publicar(){
  this.tema.id = this.idTema
  this.postagem.tema = this.tema

  this.usuario.id = this.idUser
  this.postagem.usuario = this.usuario

  this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
    this.postagem = resp
    this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
    this.postagem = new Postagem()
    this.getAllPostagens()
  })
}

}
