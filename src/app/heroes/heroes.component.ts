import { HttpClient } from '@angular/common/http';
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
  data: any;
  private Url = 'https://easy-mock.com/mock/5a387f8f75a0b747456a9959/example/heroes';
  constructor(
    private heroService: HeroService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((data) => {
        this.heroes = data;
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {

  }
  delete(hero: Hero): void {

  }
}
