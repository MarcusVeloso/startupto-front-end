import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routes';
import { AppComponent } from './app.component';
import { LandpageComponent } from './pages/landpage/landpage.component';
import { PageFooterComponent } from './navegacao/page-footer/page-footer.component';
import { PageMenuComponent } from './navegacao/page-menu/page-menu.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ComunidadesListaComponent } from './pages/comunidades-lista/comunidades-lista.component';
import { StartupsListaComponent } from './pages/startups-lista/startups-lista.component';
import { EventosListaComponent } from './pages/eventos-lista/eventos-lista.component';
import { NoticiasListaComponent } from './pages/noticias-lista/noticias-lista.component';
import { ContatosListaComponent } from './pages/contatos-lista/contatos-lista.component';
import { PatrocinadoresListaComponent } from './pages/patrocinadores-lista/patrocinadores-lista.component';
import { ApoiadoresListaComponent } from './pages/apoiadores-lista/apoiadores-lista.component';
import { MembrosListaComponent } from './pages/membros-lista/membros-lista.component';
import { MaterialDownloadListaComponent } from './pages/material-download-lista/material-download-lista.component';
import { GruposDiscussaoListaComponent } from './pages/grupos-discussao-lista/grupos-discussao-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    PageFooterComponent,
    PageMenuComponent,
    PageHomeComponent,
    ComunidadesListaComponent,
    StartupsListaComponent,
    EventosListaComponent,
    NoticiasListaComponent,
    ContatosListaComponent,
    PatrocinadoresListaComponent,
    ApoiadoresListaComponent,
    MembrosListaComponent,
    MaterialDownloadListaComponent,
    GruposDiscussaoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
