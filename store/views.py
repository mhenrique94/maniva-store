from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class StoreHome(TemplateView):
  template_name = "index.html"