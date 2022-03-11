import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  operandoa:number = 0;
  operandob:number = 0;
  resultado:string = "";
  opera:string = "";

  suma():void{
    this.operandoa = parseInt(this.resultado)
    this.opera="+";
    this.limpiar();
  }

  resta():void{
    this.operandoa = parseInt(this.resultado);
    this.opera="-";
    this.limpiar();
  }

  multiplicacion():void{
    this.operandoa = parseInt(this.resultado);
    this.opera="*";
    this.limpiar();
  }

  division():void{
    this.operandoa = parseInt(this.resultado);
    this.opera="/";
    this.limpiar();
  }

  igual():void{
    this.operandoa = parseInt(this.resultado);
    this.resolver();
  }

  resolver():void{
    let res=0;

    if(this.opera="+"){
     res = this.operandoa + this.operandob;
    } else if(this.opera="-"){
      res = this.operandoa - this.operandob;
    } else if(this.opera="*"){
      res = this.operandoa * this.operandob;
    } else if(this.opera="/"){
      res = this.operandoa / this.operandob;
    }

    this.resetear();
    res = parseInt(this.resultado);
    console.log(res);


  }

  limpiar():void{
    this.resultado="";
  }

  resetear():void{
    this.operandoa = 0;
    this.operandob = 0;
    this.opera = "";
    this.resultado = "";
  }

 /* onSumar():void{
    this.operandoa=+this.resultado;
    this.operacion = this.operandoa + this.operandob;
  }

  onRestar():void{
    this.operacion = this.operandoa - this.operandob;
  }

  onMultiplicar():void{
    this.operacion = this.operandoa * this.operandob;
  }

  onDividir():void{
    this.operacion = this.operandoa / this.operandob;
  }

  */
}
