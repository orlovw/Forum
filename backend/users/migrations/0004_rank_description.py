# Generated by Django 3.0.4 on 2020-04-24 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_email_confirmed'),
    ]

    operations = [
        migrations.AddField(
            model_name='rank',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
