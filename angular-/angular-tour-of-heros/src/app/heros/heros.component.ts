import { HEROES } from './../mock-heroes';

import { Hero } from './../hero';
import { Component ,OnInit} from '@angular/core';



@Component({
  selector:'app-heros',
  templateUrl:'./heros.component.html',
  styleUrls:['./heros.component.less']
})

export class HerosComponent implements OnInit{
 selectHero:Hero ;
 heros = HEROES;
 onSelect(hero:Hero):void {
  this.selectHero = hero
 }

constructor(){}
ngOnInit(): void {
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