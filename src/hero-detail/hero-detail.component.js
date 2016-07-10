import {Component, OnInit} from 'angular2/core';
import {Hero} from '../heroes/hero';
import {RouteParams} from 'angular2/router';
import {HeroesService} from '../heroes/heroes-service';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    templateUrl: 'hero-detail/hero-detail.component.html',
    styleUrls: ['hero-detail/hero-detail.component.css']
})
export class HeroDetailComponent{
    constructor(heroesService, routeParams) {
        this.hero = undefined;
        this.heroesService = heroesService;
        this.routeParams = routeParams;
    }

    // Angular 2 Dependency Injection for ECMAScript 6
    // If you're using TypeScript, you can use @Inject on
    // constructor parameters. Sadly, this is not valid
    // ES6 or ES7 syntax.
    static get parameters() {
      return [[HeroesService], [RouteParams]];
    }

    ngOnInit() {
      let id = Number.parseInt(this.routeParams.get('id'), 10);
      this.heroesService.getHero(id)
        .then( (hero) => {
          this.hero = hero;
        })
    }

    goBack() {
      window.history.back();
    }

}