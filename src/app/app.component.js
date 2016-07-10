import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesService} from '../heroes/heroes-service';
import {HeroesComponent} from '../heroes/heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroesService, ROUTER_PROVIDERS],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])
export class AppComponent{
  constructor(heroesService, router){
    console.log('App 2nd: AppComponent.constructor()');
    this.title = 'Tour of Heroes';
    this.heroesService = heroesService;
    this.router = router;
  }

  // Angular 2 Dependency Injection for ECMAScript 6
  // If you're using TypeScript, you can use @Inject on
  // constructor parameters. Sadly, this is not valid
  // ES6 or ES7 syntax.
  // NOTE: 1st in call order
  static get parameters() {
    console.log('App 1st: static get parameters()');
    return [[HeroesService], [Router]];
  }

  ngOnInit() {
    console.log('App 3rd: ngOnInit()');
  }

}
