import { Routes } from '@angular/router';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'companies', component: CompanyListComponent },
];
