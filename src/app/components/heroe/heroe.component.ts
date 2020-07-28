import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public id: string;
  heroe: Heroe;

  constructor(private _activedRoute: ActivatedRoute, private _heroeService: HeroesService) {
    this.id = null;
    this._activedRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.heroe = _heroeService.getHeroe(this.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
