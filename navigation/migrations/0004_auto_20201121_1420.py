# Generated by Django 2.1.2 on 2018-11-21 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('navigation', '0003_auto_20201121_1135'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chapter',
            name='Chapter_label',
            field=models.IntegerField(choices=[(1, '一级标题'), (2, '二级标题'), (3, '三级标题'), (4, '四级标题')], default=1, max_length=1),
        ),
    ]
