import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from './../componentes/Juego';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  url: string = 'http://localhost:8000/';
  juegos: Juego[] = [];

  constructor(private http: HttpClient) {
    let header: HttpHeaders = new HttpHeaders;
    header = header.append('enctype', 'multipart/form-data');
    header = header.append('Content-Type', 'application/json');
    header = header.append('X-Requested-With', 'XMLHttpRequest');
  }

  listarTodos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.url + 'listadoJuegos');
  }

  // listarTodos() {
  //   fetch(this.url + 'listadoJuegos')
  //     .then(respuesta => {
  //       return respuesta.json();
  //     })
  //     .then(resultado => {
  //       this.juegos = resultado;
  //       return this.juegos;
  //     })
  // }

}
