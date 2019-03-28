import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../servicios/juego.service';
import { Juego } from '../Juego';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  constructor(private juegoSer: JuegoService) {
   }

  ngOnInit() {

  }


}
