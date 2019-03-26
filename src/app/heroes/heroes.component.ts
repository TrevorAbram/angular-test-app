import { Component, OnInit } from '@angular/core';
// Imports the hero class
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})

// Always export the component class so that it can be imported somewhere else
export class HeroesComponent implements OnInit {

  heroes: Hero[];

// Refactored to the turn Hero into an object instead of a string
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

  getHeroes (): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }



  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
