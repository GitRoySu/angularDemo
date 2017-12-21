// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mockHeroes';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  private Url = '';
  constructor(
    private heroService: HeroService,
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.getHeroes();
    console.log(111);
    this.http.get('https://easy-mock.com/mock/5a387f8f75a0b747456a9959/example/heroes')
      .subscribe(res => console.log(res));
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {

  }
  delete(hero: Hero): void {

  }
}
