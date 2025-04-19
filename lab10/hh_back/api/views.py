import json
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Company,Vacancy
from api.serializer import CompanySerializer,VacancySerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView


@csrf_exempt
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies,many = True)

        return JsonResponse(serializer.data, safe=False)
    

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save() # insert into request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    

@csrf_exempt
def get_company(request,company_id=None):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, status=200)
    
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        serializer = CompanySerializer(instance=company,
                                        data=new_data)
        if serializer.is_valid():
            serializer.save() # update request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        # SQL: delete request
        company.delete()
        return JsonResponse({'message': 'Company deleted'})


def get_company_vacancies(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

    vacancies = Vacancy.objects.filter(company=company)  # это нормально
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)





class VacancyListAPIView(APIView):
    def get(self,request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies,many = True)

        return Response(serializer.data)
    

    def post(self,request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save() # insert into request
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)



class VacancyDetailAPIView(APIView):
    def find_vacancy(self, vacancy_id):
        try:
            return Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return None
    def get(self,request,vacancy_id):
        vacancy = self.find_vacancy(vacancy_id)
        if vacancy is None:
            return Response('error', status=404)

        serializer = VacancySerializer(vacancy)
        return Response(serializer.data, status=200)
    
    def put(self,request,vacancy_id):
        vacancy = self.find_vacancy(vacancy_id)
        if vacancy is None:
            return Response('error', status=404)
        
        serializer = VacancySerializer(vacancy,
                                        data=request.data)
        if serializer.is_valid():
            serializer.save() # update request
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def delete(self,request,vacancy_id):
        # SQL: delete request
        vacancy = self.find_vacancy(vacancy_id)
        if vacancy is None:
            return Response('error', status=404)
        
        vacancy.delete()
        return Response({'message': 'Vacancy deleted'})


class TopTenAPIView(APIView):
    def get(self,request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies,many = True)
        return Response(serializer.data)