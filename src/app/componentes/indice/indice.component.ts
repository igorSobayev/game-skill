import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../servicios/juego.service';
import { Juego } from '../Juego';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JuegosComponent } from '../juegos/juegos.component';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  datos: any[] = [];

  constructor(private juegoSer: JuegoService) {
   }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    this.juegoSer.listarTodos().subscribe((data) => {
      this.datos = data;
    });

  }


}
