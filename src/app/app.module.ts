import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './mon-premier-composant/mon-premier-composant.component';
import { MonDeuxiemeComposantComponent } from './mon-deuxieme-composant/mon-deuxieme-composant.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageDashoardComponent } from './page-dashoard/page-dashoard.component';
import { PageStatistiqueComponent } from './page-statistique/page-statistique.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    MonDeuxiemeComposantComponent,
    PageInscriptionComponent,
    PageLoginComponent,
    PageDashoardComponent,
    PageStatistiqueComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
