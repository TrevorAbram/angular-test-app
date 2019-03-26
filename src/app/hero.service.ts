import { Injectable } from '@angular/core';

// Import hero and HEROES (our fake hero data)
import { Hero } from './hero';
import { HEROES } from  './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


// Method to return the mock-heroes
  getHeroes (): Observable<Hero[]> {

    // TODO: Send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
