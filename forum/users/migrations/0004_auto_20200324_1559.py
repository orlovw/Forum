# Generated by Django 3.0.4 on 2020-03-24 15:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20191014_1403'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='member',
        ),
        migrations.AddField(
            model_name='team',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]
