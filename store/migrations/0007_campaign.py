# Generated by Django 4.1.6 on 2023-02-07 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_image_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=160)),
                ('slug', models.CharField(max_length=160)),
                ('description', models.TextField(blank=True, max_length=600, null=True)),
                ('categories', models.ManyToManyField(to='store.category')),
                ('images', models.ManyToManyField(to='store.image')),
            ],
        ),
    ]
