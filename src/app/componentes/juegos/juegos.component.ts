import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../servicios/juego.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  datos: any[] = [];

  constructor(private juegoSer: JuegoService) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    this.juegoSer.listarTodos().subscribe((data) => {
      this.datos = data;
    });
  }
}
