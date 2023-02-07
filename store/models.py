from django.db import models


# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=160)

    def __str__(self):
        return self.name


class Size(models.Model):
    size = models.CharField(max_length=10)

    def __str__(self):
        return self.size


class Product(models.Model):
    title = models.CharField(max_length=160)
    description = models.TextField(max_length=600, null=True, blank=True)
    categories = models.ManyToManyField(Category)
    sizes = models.ManyToManyField(Size)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    price = models.DecimalField(
        decimal_places=2, max_digits=10, null=False, blank=False)
    brand = models.CharField(max_length=160)

    def __str__(self):
        return self.title


class Image(models.Model):
    name = models.CharField(max_length=255)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.name
