# Generated by Django 5.1.7 on 2025-03-22 09:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_arduinoproject_image2_arduinoproject_image3_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='arduinoproject',
            name='image2',
        ),
        migrations.RemoveField(
            model_name='arduinoproject',
            name='image3',
        ),
        migrations.RemoveField(
            model_name='arduinoproject',
            name='image4',
        ),
        migrations.RemoveField(
            model_name='nodemcuproject',
            name='image2',
        ),
        migrations.RemoveField(
            model_name='nodemcuproject',
            name='image3',
        ),
        migrations.RemoveField(
            model_name='nodemcuproject',
            name='image4',
        ),
        migrations.RemoveField(
            model_name='raspberrypiproject',
            name='image2',
        ),
        migrations.RemoveField(
            model_name='raspberrypiproject',
            name='image3',
        ),
        migrations.RemoveField(
            model_name='raspberrypiproject',
            name='image4',
        ),
    ]
