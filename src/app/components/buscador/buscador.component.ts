import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[];

  constructor(private _activedRoute: ActivatedRoute, 
        private _heroeService: HeroesService,
        private _router: Router) {
    this._activedRoute.params.subscribe(params =>{
      this.heroes = this._heroeService.buscarHeroe(params['termino']);
    });
  }

  ngOnInit(): void {

  }

  verHeroe(id: string){
    this._router.navigate(['/heroe', id]);
  }

}
