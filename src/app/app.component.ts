import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  operandoa:string = ""
  operandob:string = "";
  resultado:string = "";
  opera:string = "";

  suma():void{
    this.operandoa = (this.resultado);
    this.opera="+";
    this.limpiar();
  }

  resta():void{
    this.operandoa = (this.resultado);
    this.opera="-";
    this.limpiar();
  }

  multiplicacion():void{
    this.operandoa = (this.resultado);
    this.opera="*";
    this.limpiar();
  }

  division():void{
    this.operandoa = (this.resultado);
    this.opera="/";
    this.limpiar();
  }

  igual():void{
    this.operandob = (this.resultado);
    this.resolver();
  }

  resolver():void{

    let res=0;

    switch(this.opera){
      case "+":
        res = parseInt(this.operandoa) + parseInt(this.operandob);
        break;
      case "-":
        res = parseInt(this.operandoa) - parseInt(this.operandob);
        break;
      case "*":
        res = parseInt(this.operandoa) * parseInt(this.operandob);
        break;
      case "/":
        res = parseInt(this.operandoa) / parseInt(this.operandob);
        break;
      
    }

    /*if(this.opera="+"){
     res = this.operandoa + this.operandob;
    } else if(this.opera="-"){
      res = this.operandoa - this.operandob;
    } else if(this.opera="*"){
      res = this.operandoa * this.operandob;
    } else if(this.opera="/"){
      res = this.operandoa / this.operandob;
    }*/

    res = parseInt(this.resultado);
    console.log(res);
    this.resetear();


  }

  limpiar():void{
    this.resultado="";
  }

  resetear():void{
    this.operandoa = "";
    this.operandob = "";
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
