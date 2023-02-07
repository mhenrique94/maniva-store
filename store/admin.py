from django.contrib import admin
from store.models import Product, Size, Category, Image, Wishlist, Customer
# Register your models here.
admin.site.register(Product)
admin.site.register(Size)
admin.site.register(Category)
admin.site.register(Image)
admin.site.register(Wishlist)
admin.site.register(Customer)