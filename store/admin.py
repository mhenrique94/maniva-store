from django.contrib import admin
from store.models import Product, Size, Category, Image
# Register your models here.
admin.site.register(Product)
admin.site.register(Size)
admin.site.register(Category)
admin.site.register(Image)
