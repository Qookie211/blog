# Generated by Django 2.1.2 on 2018-11-21 17:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('navigation', '0005_auto_20201121_1454'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chapter',
            old_name='Chapter_label',
            new_name='chapter_label',
        ),
        migrations.RenameField(
            model_name='chapter',
            old_name='Chapter_text',
            new_name='chapter_text',
        ),
    ]
