import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './componentes/indice/indice.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BuscarPorCriteriosComponent } from './componentes/buscar-por-criterios/buscar-por-criterios.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { UltimosComponent } from './componentes/buscar-por-criterios/ultimos/ultimos.component';
import { NovedadesComponent } from './componentes/buscar-por-criterios/novedades/novedades.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';
import { BuscarComponent } from './componentes/administracion/buscar/buscar.component';
import { CrearComponent } from './componentes/administracion/crear/crear.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { PantallaJuegoComponent } from './componentes/juegos/pantalla-juego/pantalla-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    HeaderComponent,
    BuscarPorCriteriosComponent,
    AsideComponent,
    UltimosComponent,
    NovedadesComponent,
    AdministracionComponent,
    BuscarComponent,
    CrearComponent,
    FooterComponent,
    JuegosComponent,
    PantallaJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
