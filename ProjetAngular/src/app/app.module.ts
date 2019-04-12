
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterProprietaireComponent } from './ajouter-proprietaire/ajouter-proprietaire.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AjouterProprietaireComponent,
    AjouterClientComponent,
    HeaderComponent,
    FooterComponent,
    AjouterDossierComponent,
    AjouterBiensImmoComponent,
    AjouterClasseStandardComponent,
    ModifierClientComponent,
    ModifierProprietaireComponent,
    ModifierDossierComponent,
    ModifierBiensImmoComponent,
    ModifierClasseStandardComponent,
    ListeClientComponent,
    ListeProprietaireComponent,
    ListeDossierComponent,
    ListeBiensImmoComponent,
    ListeClasseStandardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
