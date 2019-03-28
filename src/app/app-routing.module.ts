import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarPorCriteriosComponent } from './componentes/buscar-por-criterios/buscar-por-criterios.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { IndiceComponent } from './componentes/indice/indice.component';

const routes: Routes = [
  { path: '', component: IndiceComponent },
  { path: 'buscarCriterio', component: BuscarPorCriteriosComponent },
  { path: 'juegos', component: JuegosComponent},
  { path: 'indice', component: IndiceComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
