# Generated by Django 3.0.4 on 2020-04-23 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20200422_0954'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='topic',
            name='tags',
            field=models.ManyToManyField(related_name='topic', to='api.Tag'),
        ),
    ]
