import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioFormComponent } from './view/formulario/formulario-form/formulario-form.component';
import { FormularioListComponent } from './view/formulario/formulario-list/formulario-list.component';
import { FormularioViewRespostaComponent } from './view/formulario/formulario-view-resposta/formulario-view-resposta.component';
import { FormularioViewComponent } from './view/formulario/formulario-view/formulario-view.component';
import { HomeComponent } from './view/home/home.component';
import { PessoaFormComponent } from './view/pessoa/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './view/pessoa/pessoa-list/pessoa-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pessoa', component: PessoaListComponent },
  { path: 'pessoa/:id', component: PessoaFormComponent },
  { path: 'formulario', component: FormularioListComponent },
  { path: 'formulario/:id', component: FormularioFormComponent },
  { path: 'formulario/responder/:id', component: FormularioViewComponent },
  {
    path: 'formulario/visualizar/:id',
    component: FormularioViewRespostaComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
