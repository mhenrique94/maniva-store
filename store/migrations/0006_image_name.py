# Generated by Django 4.1.6 on 2023-02-07 12:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_remove_image_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='name',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
