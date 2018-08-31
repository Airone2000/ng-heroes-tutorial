import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroType } from '../../types/hero.type';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common'
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {


  hero: null|HeroType;
  originalHeroName: null|string;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
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
      hero => { 
        this.hero = hero; 
        this.originalHeroName = hero.name 
      }
    );
  }

  onChange(): void
  {
    if(this.hero.name !== this.originalHeroName) {
      this.messageService.addMessage(`${this.originalHeroName} : his name changes to ${this.hero.name}`);
    }
  }

  goBack(): void
  {
    this.location.back();
  }

}
