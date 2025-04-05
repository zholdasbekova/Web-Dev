from django.http import JsonResponse
from django.urls import path
from . import views

def api_home(request):
    return JsonResponse({'message': 'Welcome to the HH API!'})

urlpatterns = [
    path('', api_home), 
    path('companies/', views.all_companies),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.all_vacancies),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]
