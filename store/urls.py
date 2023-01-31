from django.urls import path

from store.views import StoreHome

app_name = 'store'
urlpatterns = [
    path('', StoreHome.as_view(), name='homepage')
]
