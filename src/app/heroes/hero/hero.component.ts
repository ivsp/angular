import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})

export class HeroComponent{
    public name:string = 'Ironman';
    public age:number = 45;

    get nameCapitalize():string{
        return this.name.toUpperCase();
    };

    public getName():string{
        return `${this.name} - ${this.age}`
    };
    public changeNAme():void{
        this.name = 'Spiderman'
    };
    public changeAge():void{
        this.age = 35;
    };
}