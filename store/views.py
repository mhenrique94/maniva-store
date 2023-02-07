from django.shortcuts import render
from django.views.generic import TemplateView
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from store.models import Product
from store.serializers import ProductSerializer

# Create your views here.


class StoreHome(TemplateView):
    template_name = "index.html"


@api_view(['GET'])
def product_detail(request, pk):
    try:
        if request.method == 'GET':
            product = Product.objects.get(pk=pk)
            product_serializer = ProductSerializer(product)
            return JsonResponse(product_serializer.data)
    except Product.DoesNotExist:
        return JsonResponse({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def products(request):
    # GET list of products
    if request.method == 'GET':
        products = Product.objects.all()
        title = request.GET.get('title', None)
        if title is not None:
            products = products.filter(title__icontains=title)

        products_serializer = ProductSerializer(products, many=True)
        return JsonResponse(products_serializer.data, safe=False)
