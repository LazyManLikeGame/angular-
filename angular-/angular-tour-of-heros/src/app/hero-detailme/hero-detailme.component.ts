import { Hero } from './../hero';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-hero-detailme',
  templateUrl: './hero-detailme.component.html',
  styleUrls: ['./hero-detailme.component.less']
})
export class HeroDetailmeComponent implements OnInit {
 @Input() hero:Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
