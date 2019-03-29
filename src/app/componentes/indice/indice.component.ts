import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../servicios/juego.service';
import { Juego } from '../Juego';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JuegosComponent } from '../juegos/juegos.component';
import { JUEGOS } from './../../fotos';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  datos: any[] = [];
  left: number = 0;
  right: number = 0;
  top: number = 0;
  bottom: number = 0;

  constructor(private juegoSer: JuegoService) {
  }

  ngOnInit() {
    this.listarTodos();
    this.cambiarFoto();
  }

  listarTodos() {
    this.juegoSer.listarTodos().subscribe((data) => {
      this.datos = data;
    });
  }

  // Método encargado de cambiar la foto cuando se hace click en el botón o en la foto
  cambiarFoto() {
    // Recupero los elementos del DOM en el que voy a insertar los datos
    var foto_actual = document.querySelector('.contenedor-foto');
    var datos_actual = document.querySelector('.contenedor-texto-datos');
    // Número aleatorio para obtener la foto
    let aleatorio = this.fotoRandom();
    // Inserto los datos
    foto_actual.innerHTML = ` <img src=${JUEGOS[aleatorio].url}
     class="foto" alt="" width="100%" height="100%">`;
    datos_actual.innerHTML = ` <h1>${JUEGOS[aleatorio].titulo}</h1>
     <p>${JUEGOS[aleatorio].descripcion}</p> `;
  }

  // Método para obtener un número random cada vez que se llame
  fotoRandom() {
    let aleatorio = Math.floor(Math.random() * (19 - 1) + 1);
    return aleatorio;
  }

  // Método para crear la animación del personaje
  // No funciona porque hay un error que no detecta cssRules como
  // propiedad de styleSheets y provoca un error que no compila el proyecto
  empezarJuego() {
    console.log('empezamos');
    var mago = document.querySelector('.mago');
    document.addEventListener('keydown', event => {
      const keyName = event.key;
      if (keyName == 'ArrowRight') {
        // this.right += 5;
        // document.styleSheets[4].cssRules[11].style.right = `${this.right}px`;
        // var valor = document.styleSheets[4];
        // console.log(valor.cssRules);
      }
      if (keyName == 'ArrowLeft') {
        // this.left += 5;
        // document.styleSheets[4].cssRules[11].style.left = `${this.left}px`;
        // console.log(document.styleSheets[4].cssRules[11].style.left);
      }
      console.log(keyName);
    })

  }



}
