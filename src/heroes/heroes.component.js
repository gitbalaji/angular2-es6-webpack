import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroesService} from './heroes-service';

@Component({
    selector: "my-heroes",
    directives: [HeroDetailComponent],
    providers: [],
    templateUrl: 'heroes/heroes.component.html',
    styleUrls: ['heroes/heroes.component.css']
})
export class HeroesComponent{
  constructor(heroesService, router){
    this.title = 'Tour of Heroes';
    this.selectedHero;
    this.heroes = [];
    this.heroesService = heroesService;
    this.router = router;
  }

  ngOnInit() {
    this.heroesService.getHeroes()
      .then( (heroes) => {
          this.heroes = heroes;
      })
  }

  // Angular 2 Dependency Injection for ECMAScript 6
  // If you're using TypeScript, you can use @Inject on
  // constructor parameters. Sadly, this is not valid
  // ES6 or ES7 syntax.
  static get parameters() {
    return [[HeroesService], [Router]];
  }

  onSelect(hero){
    this.selectedHero = hero;
  }

  getHeroes(){
    this.heroesService.getHeroes()
    .then( heroes => {
      this.heroes = heroes;
    })
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
}
