# Generated by Django 2.1.2 on 2018-11-24 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('navigation', '0006_auto_20201121_1723'),
    ]

    operations = [
        migrations.AddField(
            model_name='chapter',
            name='chapter_content',
            field=models.CharField(blank=True, max_length=10000, null=True),
        ),
        migrations.AddField(
            model_name='chapter',
            name='chapter_orderId',
            field=models.IntegerField(default=10),
        ),
    ]
