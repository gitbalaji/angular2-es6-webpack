import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroesService{
    constructor() {
      console.log('HeroesService.constructor()');
    }

    getHeroes(){
        return Promise.resolve(HEROES);
    }

    getHero(id){
      let result = HEROES.find( (element, index, array) => {
        return element.id === id;
      });
      return Promise.resolve(result);
    }
}
