import { Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { RepositoriesComponent } from './views/repositories/repositories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'repositories', component: RepositoriesComponent },
  { path: '**', redirectTo: 'about' }
];
