import { Component } from '@angular/core';

interface Personaje{
  nombre:string,
  poder:number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  public nuevoPersonaje: Personaje ={
    nombre: 'Trunks',
    poder:140000

  }
  public agregar():void{
    console.log(this.nuevoPersonaje)
  }
  public cambiarNombre(e:any):void{
      console.log(e.target.value)
  }

}
