import { Component, OnInit } from '@angular/core';
import { HeroType } from '../../types/hero.type';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: HeroType[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void
  {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

}
