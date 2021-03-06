import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-heroes',
  templateUrl: '../../app/heroes.component.html',
  styleUrls: [ '../../app/heroes.component.css' ],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  //Inyectar el HeroService
  constructor(private router: Router,private heroService: HeroService) { }

  //obtener la informacion
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => {
        // Handle errors of asyncFunc1() and asyncFunc2()
      });
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}