
import { Hero } from './../hero';
import { Component ,OnInit} from '@angular/core';
import { HeroService } from '../hero.service';



@Component({
  selector:'app-heros',
  templateUrl:'./heros.component.html',
  styleUrls:['./heros.component.less']
})

export class HerosComponent implements OnInit{
 selectHero:Hero ;
 heros:Hero[];
 onSelect(hero:Hero):void {
  this.selectHero = hero
 }

constructor(private heroService:HeroService){}
ngOnInit(): void {
  this.getHeroes()
    }
getHeroes():void{
  this.heros = this.heroService.getHeroes()
}
  
} 

// import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';

// @Component({
//   selector: 'app-heros',
//   templateUrl: './heros.component.html',
//   styleUrls: ['./heros.component.less']
// })
// export class HerosComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }