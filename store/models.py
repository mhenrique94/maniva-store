from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Customer(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.name


# def signup(request):
# if request.method == 'POST':
#     form = SignUpForm(request.POST)
#     if form.is_valid():
#         form.save()
#         username = form.cleaned_data.get('username')
#         raw_password = form.cleaned_data.get('password1')
#         user = authenticate(username=username, password=raw_password)
#         Customer.objects.create(user=user,name=username,email=email) // get the email from the form
#         login(request, user)
#         return redirect('store')
#
#     else:
#         form = SignUpForm()
#     return render(request, 'store/signup.html', {'form': form})


class Category(models.Model):
    name = models.CharField(max_length=160)

    def __str__(self):
        return self.name


class Size(models.Model):
    size = models.CharField(max_length=10)

    def __str__(self):
        return self.size


class Image(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(max_length=200)
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.name


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
    images = models.ManyToManyField(Image)

    def __str__(self):
        return self.title


class Campaign(models.Model):
    title = models.CharField(max_length=160)
    slug = models.CharField(max_length=160)
    description = models.TextField(max_length=600, null=True, blank=True)
    categories = models.ManyToManyField(Category)
    images = models.ManyToManyField(Image)

    def __str__(self):
        return self.title


class Wishlist(models.Model):
    products = models.ManyToManyField(Product)
    customer = models.OneToOneField(Customer, null=True, blank=True, on_delete=models.CASCADE)
    added_date = models.DateTimeField(auto_now_add=True)
