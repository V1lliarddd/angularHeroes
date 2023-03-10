import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes() {
    const heroes = of(HEROES);
    this.messageService.add('Hero Service: heroes fetched');
    return heroes;
  }
  getHero(id: number) {
    const hero = HEROES.find((h) => h.id === id)!;
    return of(hero);
  }
}
