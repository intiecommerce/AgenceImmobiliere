import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { AjouterProprietaireComponent } from './ajouter-proprietaire/ajouter-proprietaire.component';
import { AjouterDossierComponent } from './ajouter-dossier/ajouter-dossier.component';
import { AjouterBiensImmoComponent } from './ajouter-biens-immo/ajouter-biens-immo.component';
import { AjouterClasseStandardComponent } from './ajouter-classe-standard/ajouter-classe-standard.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ModifierProprietaireComponent } from './modifier-proprietaire/modifier-proprietaire.component';
import { ModifierDossierComponent } from './modifier-dossier/modifier-dossier.component';
import { ModifierBiensImmoComponent } from './modifier-biens-immo/modifier-biens-immo.component';
import { ModifierClasseStandardComponent } from './modifier-classe-standard/modifier-classe-standard.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeProprietaireComponent } from './liste-proprietaire/liste-proprietaire.component';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { ListeBiensImmoComponent } from './liste-biens-immo/liste-biens-immo.component';
import { ListeClasseStandardComponent } from './liste-classe-standard/liste-classe-standard.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AccueilComponent},
  {path:'addClient',component:AjouterClientComponent},
  {path:'addProprietaire',component:AjouterProprietaireComponent},
  {path:'addDossier',component:AjouterDossierComponent},
  {path:'addBiensImmo',component:AjouterBiensImmoComponent},
  {path:'addClasseStandard',component:AjouterClasseStandardComponent},
  {path:'updateClient',component:ModifierClientComponent},
  {path:'updateProprietaire',component:ModifierProprietaireComponent},
  {path:'updateDossier',component:ModifierDossierComponent},
  {path:'updateBiensImmo',component:ModifierBiensImmoComponent},
  {path:'updateClasseStandard',component:ModifierClasseStandardComponent},
  {path:'listeClient',component:ListeClientComponent},
  {path:'listeProprietaire',component:ListeProprietaireComponent},
  {path:'listeDossier',component:ListeDossierComponent},
  {path:'listeBiensImmo',component:ListeBiensImmoComponent},
  {path:'listeClasseStandard',component:ListeClasseStandardComponent},

  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
