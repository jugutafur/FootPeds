import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './layout/principal/principal.component';
import { IntegrantesComponent } from './core/componentes/integrantes/integrantes.component'
import { PresentacionComponent } from './core/componentes/presentacion/presentacion.component';
import { SimuladorComponent } from './core/componentes/simulador/simulador.component';

const routes : Routes = [
  {
      path: '',
      component: PrincipalComponent
  },
  {
    path: 'Inicio',
    component: PrincipalComponent
},
  {
      path: 'Integrantes',
      component: IntegrantesComponent
  },
  {
      path: 'Presentacion',
      component: PresentacionComponent
  },
  {
      path: 'Simulador',
      component: SimuladorComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
