import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

 public heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
 public deleteHeroName: string = '';
 public show: boolean = false;

 public deleteHero():void{
  const newHeroes  = this.heroes.splice(0,1) || '';
  console.log(newHeroes);
  this.deleteHeroName = newHeroes[0];
  if(newHeroes[0] === undefined ){
    this.show = false;
    console.log('entro if')
  }else{
    console.log('entro else')

    this.show = true;

  }
 };
}
