import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';
import { ReloadRouter } from './helpers/reload-router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'muralDePensamento',
    pathMatch: 'full',
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent,
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent,
  },
  {
    path: 'muralDePensamento',
    component: ListarPensamentoComponent,
    data: {
      reuseComponent: true,
    },
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: ReloadRouter }],
})
export class AppRoutingModule {}
