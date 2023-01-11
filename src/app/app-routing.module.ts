import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/edi-educacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaEXP', component: NewExperienciaComponent},
  {path: 'editEXP/:id', component: EditExperienciaComponent},
  {path: 'nuevaEDU', component: NeweducacionComponent},
  {path: 'editEDU/:id', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
