from django.urls import path, re_path
from store import views

app_name = 'store'
urlpatterns = [
    re_path(r'^api/products$', views.products),
    re_path(r'^api/products/(?P<pk>[0-9]+)$', views.product_detail),
    re_path(r'^api/images/$', views.images),
    re_path(r'^api/wishlist/$', views.wishlist),
    re_path(r'^api/wishlist/(?P<pk>[0-9]+)$', views.wishlist),
]
