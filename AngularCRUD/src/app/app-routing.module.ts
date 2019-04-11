import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ModifComponent } from './modif/modif.component';
import { SupprComponent } from './suppr/suppr.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AccueilComponent},
  {path:'add',component:AjoutComponent},
  {path:'update',component:ModifComponent},
  {path:'delete',component:SupprComponent},
  {path:'find',component:RechercheComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
