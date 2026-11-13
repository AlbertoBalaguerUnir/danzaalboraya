import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Actividades } from './pages/actividades/actividades';
import { Horarios } from './pages/horarios/horarios';
import { Festival } from './pages/festival/festival';
import { Contacto } from './pages/contacto/contacto';
import { Competicion } from './pages/competicion/competicion';

// Categorías de baile
import { BalletJunior } from './pages/ballet-junior/ballet-junior';
import { BalletAdultos } from './pages/ballet-adultos/ballet-adultos';
import { Danzaurbana } from './pages/danzaurbana/danzaurbana';
import { Barre } from './pages/barre/barre';
import { Bodytonic } from './pages/bodytonic/bodytonic';
import { Latinos } from './pages/latinos/latinos';
import { Heels } from './pages/heels/heels';
import { Comercialjazz } from './pages/comercialjazz/comercialjazz';
import { Bailesocial } from './pages/bailesocial/bailesocial';
import { Bailenovios } from './pages/bailenovios/bailenovios';
import { Predanza } from './pages/predanza/predanza';
import { Fitkid } from './pages/fitkid/fitkid';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },

  // Categorías de baile
  { path: 'ballet-junior', component: BalletJunior },
  { path: 'ballet-adultos', component: BalletAdultos },
  { path: 'danzaurbana', component: Danzaurbana },
  { path: 'barre', component: Barre },
  { path: 'bodytonic', component: Bodytonic},
  { path: 'latinos', component: Latinos },
  { path: 'heels', component: Heels },
  { path: 'comercialjazz', component: Comercialjazz },
  { path: 'bailesocial', component: Bailesocial },
  { path: 'bailenovios', component: Bailenovios },
  { path: 'predanza', component: Predanza },
  { path: 'fitkid', component: Fitkid },

  // Páginas principales
  { path: 'actividades', component: Actividades },
  { path: 'horario-precios', component: Horarios },
  { path: 'festival', component: Festival },
  { path: 'contacto', component: Contacto },
  { path: 'competicion', component: Competicion },

  { path: '**', redirectTo: 'inicio' }
];