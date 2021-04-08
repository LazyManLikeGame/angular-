import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-me',
  templateUrl: './hero-me.component.html',
  styleUrls: ['./hero-me.component.less']
})
export class HeroMeComponent implements OnInit {
  hero:Hero = {
    id:1,
    name:'3432'
  };
  selector:Hero;
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }
  onselect(hero):void{
    this.selector = hero
  }
}
