import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HhService } from '../services/hh.service';
import { Vacancy } from '../models/Vacancy';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit {
  vacancies: any[] = [];

  constructor(private hhService:HhService) {}

  ngOnInit(): void {
    this.hhService.getVacancies().subscribe( (data:Vacancy[])=>{
      this.vacancies=data;
    })
  }

  getTopTen(){
    this.hhService.getTopVacancies().subscribe( (data:Vacancy[]) =>{
      this.vacancies=data;
    })
  }

}