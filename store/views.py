import json
from django.shortcuts import render
from django.views.generic import TemplateView
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from store.models import *
from store.serializers import ProductSerializer, ImageSerializer, WishlistSerializer


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
    products = Product.objects.all()
    if request.query_params:
        category = Category.objects.filter(
            name=request.query_params['category'])
        if category:
            category_id = category[0].id
            products_ids = Product.categories.through.objects.filter(
                category_id=category_id).values_list('product_id')
            products = products.filter(id__in=products_ids)

        # title = request.GET.get('title', None)
        # if title is not None:
        #     products = products.filter(title__icontains=title)

    products_serializer = ProductSerializer(products, many=True)
    return JsonResponse(products_serializer.data, safe=False)


@api_view(['GET'])
def images(request):
    if request.method == 'GET':
        images = Image.objects.all()
        image_serializer = ImageSerializer(images, many=True)
        return JsonResponse(image_serializer.data, safe=False)


@api_view(['GET', 'PATCH'])
def wishlist(request, pk):
    if request.method == 'GET':
        wishlist = Wishlist.objects.all()
        wishlist_serializer = WishlistSerializer(wishlist, many=True)
        return JsonResponse(wishlist_serializer.data, safe=False)

    elif request.method == 'PATCH':
        wishlist = Wishlist.objects.get(pk=pk)
        wishlist_data = request.data['products']
        products_ids = []
        for each in wishlist_data:
            products_ids.append(each['id'])
        prod_to_save = Product.objects.filter(id__in=products_ids)
        for prod in prod_to_save:
            prod.wishlist_set.add(wishlist)
        wishlist_serializer = WishlistSerializer(wishlist, data=wishlist_data)
        if wishlist_serializer.is_valid():
            wishlist_serializer.save()
            return JsonResponse(wishlist_serializer.data)
        return JsonResponse(wishlist_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
