import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public peso:string;
  public altura:string;
  public calculo:string;
  public valorImc:number;
  public classificacao:string;

  calculoIMC(){
    let pesoValue = parseFloat(this.peso);
    let alturaValue = parseFloat(this.altura);
    this.valorImc = pesoValue / (alturaValue * alturaValue);

    if(this.valorImc < 18.5){
      this.classificacao = "Abaixo do peso";
    }else if(this.valorImc >= 18.5 && this.valorImc < 24.9){
      this.classificacao = "Peso normal";
    }else if(this.valorImc >= 24.9 && this.valorImc <= 29.9){
      this.classificacao = "Sobrepeso";
    }else if(this.valorImc > 29.9 && this.valorImc <= 34.9){
      this.classificacao = "Obesidade grau 1";
    }else if(this.valorImc > 34.9 && this.valorImc <= 39.9){
      this.classificacao = "Obesidade grau 2";
    }else if(this.valorImc >= 40){
      this.classificacao = "Obesidade grau 3 ou mórbida";
    }

  }

  constructor(public navCtrl: NavController) {
  }
}
