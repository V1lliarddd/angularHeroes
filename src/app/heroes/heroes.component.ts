import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((hero) => (this.heroes = hero));
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(
      'HeroesComponent: Selected hero id = ' + this.selectedHero.id
    );
  }
}