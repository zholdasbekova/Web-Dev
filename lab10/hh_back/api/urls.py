from django.contrib import admin
from django.urls import path
from api import views
from . import views


urlpatterns = [
  path('companies/', views.get_companies),
  path('companies/<int:company_id>/', views.get_company),
  path('companies/<int:company_id>/vacancies/', views.get_company_vacancies),
  path('vacancies/', views.VacancyListAPIView.as_view()),
  path('vacancies/<int:vacancy_id>/', views.VacancyDetailAPIView.as_view()),
  path('vacancies/top_ten/', views.TopTenAPIView.as_view()),
]
