import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumulate(base)">+{{ base }}</button>
    <h1>{{ number }}</h1>
    <button (click)="acumulate(-base)">-{{ base }}</button>
    `
    
})

export class ContadorComponent{
    public title: string = 'Contador';
    public number: number = 10;
   
    // public plus():number{
    //  return this.number += 1;
    // }
    // public minus():number{
    //   return this.number -= 1;
    // }
    public base:number = 5;
    
    public acumulate(valor:number):number{
      return this.number += valor;
    }
}