import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Vacancy } from '../models/Vacancy';
import { OnInit } from '@angular/core';
import { HhService } from '../services/hh.service';
import { Company } from '../models/company';


@Component({
  selector: 'app-company-list',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})

export class CompanyListComponent implements OnInit{
  companies: any[] = [];
  vacancies: any[] = [];
  selectedCompany: any = null;

  constructor(private hhService:HhService) {}

  ngOnInit() {
    this.hhService.getCompanies().subscribe( (data:Company[]) =>{
      this.companies=data;
    })
  }

  selectCompany(company: Company) {
    this.selectedCompany = company;
    this.hhService.getCompanyVacancies(company.id).subscribe( (data:Vacancy[])=>{
      this.vacancies=data;
    })
  }
}
