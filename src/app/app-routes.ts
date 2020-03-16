import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosListaComponent } from './pages/eventos-lista/eventos-lista.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ApoiadoresListaComponent } from './pages/apoiadores-lista/apoiadores-lista.component';
import { ComunidadesListaComponent } from './pages/comunidades-lista/comunidades-lista.component';
import { ContatosListaComponent } from './pages/contatos-lista/contatos-lista.component';
import { GruposDiscussaoListaComponent } from './pages/grupos-discussao-lista/grupos-discussao-lista.component';
import { MaterialDownloadListaComponent } from './pages/material-download-lista/material-download-lista.component';
import { MembrosListaComponent } from './pages/membros-lista/membros-lista.component';
import { NoticiasListaComponent } from './pages/noticias-lista/noticias-lista.component';
import { PatrocinadoresListaComponent } from './pages/patrocinadores-lista/patrocinadores-lista.component';
import { StartupsListaComponent } from './pages/startups-lista/startups-lista.component';
import { LandpageComponent } from './pages/landpage/landpage.component';

const rootRoutesConfig: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landpage' },
  { path: 'landpage', component: LandpageComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'apoiadores', component: ApoiadoresListaComponent },
  { path: 'comunidades', component: ComunidadesListaComponent },
  { path: 'contato', component: ContatosListaComponent },
  { path: 'eventos', component: EventosListaComponent },
  { path: 'grupos-discussao', component: GruposDiscussaoListaComponent },
  { path: 'material-download', component: MaterialDownloadListaComponent },
  { path: 'membros', component: MembrosListaComponent },
  { path: 'noticias', component: NoticiasListaComponent },
  { path: 'patrocinadores', component: PatrocinadoresListaComponent },
  { path: 'startups', component: StartupsListaComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
