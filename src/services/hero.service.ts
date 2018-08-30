import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { HeroType } from '../types/hero.type';
import { HEROES } from '../data/heroes.data';

@Injectable({
    providedIn: 'root'
})
export class HeroService
{
    construct(){}

    getHeroes(): Observable<HeroType[]>
    {
        return of(HEROES);
    }

    getHero(id): Observable<HeroType>
    {
        id = +id;
        let hero = HEROES.find( hero => hero.id === id );
        return of(hero);
    }

}