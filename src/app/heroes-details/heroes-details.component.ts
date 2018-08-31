import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroType } from '../../types/hero.type';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {


  hero: null|HeroType;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) 
  { }

  ngOnInit() 
  {
    this.getHero();
  }

  getHero(): void
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }

  goBack(): void
  {
    this.location.back();
  }

}
