import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Vacancy } from '../models/Vacancy';

@Injectable({
  providedIn: 'root'
})
export class HhService {

  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) { }

  getCompanies():Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`);
  }


  getVacancies():Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  }


  getCompanyVacancies(id:number):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies/`)
  }

  getTopVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top_ten/`);
  }

}
