from django.urls import path, re_path
from store import views
from store.views import StoreHome

app_name = 'store'
urlpatterns = [
    path('', StoreHome.as_view(), name='homepage'),
    re_path(r'^api/products$', views.products),
    re_path(r'^api/products/(?P<pk>[0-9]+)$', views.product_detail),
]
