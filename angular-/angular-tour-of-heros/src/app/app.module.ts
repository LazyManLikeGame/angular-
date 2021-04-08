import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';

import { FormsModule } from '@angular/forms';
import { HeroMeComponent } from './hero-me/hero-me.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailmeComponent } from './hero-detailme/hero-detailme.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroMeComponent,
    HeroDetailComponent,
    HeroDetailmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
