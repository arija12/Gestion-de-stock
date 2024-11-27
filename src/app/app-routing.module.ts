import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashoardComponent } from './page-dashoard/page-dashoard.component';
import { PageStatistiqueComponent } from './page-statistique/page-statistique.component';

const routes: Routes = [
  {path:'login',
    component:PageLoginComponent

  },
  {
    path:'inscrire',
    component:PageInscriptionComponent
  },
  {
    path:'',
    component:PageDashoardComponent,
  children :[
  {path:'stat',
    component:PageStatistiqueComponent

  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
