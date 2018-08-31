import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { HeroType } from '../types/hero.type';
import { HEROES } from '../data/heroes.data';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService
{
    constructor( private messageService: MessageService ){}

    getHeroes(): Observable<HeroType[]>
    {
        this.messageService.addMessage('Heroes loaded');
        return of(HEROES);
    }

    getHero(id): Observable<HeroType>
    {
        id = +id;
        let hero = HEROES.find( hero => hero.id === id );
        this.messageService.addMessage(`Hero named ${hero.name} loaded`);
        return of(hero);
    }

}