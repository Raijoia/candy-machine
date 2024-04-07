import { Routes } from '@angular/router';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { AutomatoComponent } from './components/automato/automato.component';

export const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'automato',
    component: AutomatoComponent
  }
];
