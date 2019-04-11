import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ModifComponent } from './modif/modif.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SupprComponent } from './suppr/suppr.component';
import { HeaderComponent } from './template/header/header.component';
import { EtudiantService } from './services/etudiant.service';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ModifComponent,
    RechercheComponent,
    AccueilComponent,
    SupprComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
