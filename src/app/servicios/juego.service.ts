import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from './../componentes/Juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  url: string = 'http://localhost:8000/';
  // http: HttpClient = new HttpClientModule;
  juegos = [];

  constructor() {
    let header: HttpHeaders = new HttpHeaders;
    header = header.append('Content-Type', 'application/json');
    header = header.append('X-Requested-With', 'XMLHttpRequest');
  }

  // listarTodos() {

  //   this.http.get(this.url + 'listadoJuegos').subscribe((data) => {
  //     return 'quiero morir';
  //   });

  // }

}
