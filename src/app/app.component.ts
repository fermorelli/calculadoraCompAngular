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

  uno():void{
    this.resultado += "1";
  }
  dos():void{
    this.resultado += "2";
  }
  tres():void{
    this.resultado += "3";
  }
  cuatro():void{
    this.resultado += "4";
  }
  cinco():void{
    this.resultado += "5";
  }
  seis():void{
    this.resultado += "6";
  }
  siete():void{
    this.resultado += "7";
  }
  ocho():void{
    this.resultado += "8";
  }
  nueve():void{
    this.resultado += "9";
  }
  cero():void{
    this.resultado += "0";
  }


  suma():void{
    this.operandoa = this.resultado;
    this.opera="+";
    this.limpiar();
    console.log(this.operandoa);
  }

  resta():void{
    this.operandoa = this.resultado;
    this.opera="-";
    this.limpiar();
  }

  multiplicacion():void{
    this.operandoa = this.resultado;
    this.opera="*";
    this.limpiar();
  }

  division():void{
    this.operandoa = this.resultado;
    this.opera="/";
    this.limpiar();
  }

  igual():void{
    this.operandob = this.resultado;
    console.log(this.operandob);
    this.resolver();
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

  resolver(){

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

    this.limpiar();
    res = parseInt(this.resultado);

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
