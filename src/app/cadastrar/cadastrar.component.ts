import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
