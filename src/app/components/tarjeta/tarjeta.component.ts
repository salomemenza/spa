import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() heroe: any = [];
  @Input() indice: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  emitirHeroe(){
    this._router.navigate(['/heroe', this.indice]);
    //this.heroeSeleccionado.emit(this.indice);
  }

}
