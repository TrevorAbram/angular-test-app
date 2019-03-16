import { Component, OnInit } from '@angular/core';
// Imports the hero class
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})

// Always export the component class so that it can be imported somewhere else
export class HeroesComponent implements OnInit {

  heroes = HEROES;

// Refactored to the turn Hero into an object instead of a string
  selectedHero: hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }



  constructor() { }

  ngOnInit() {
  }

}
