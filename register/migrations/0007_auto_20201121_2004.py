

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0006_auto_20201121_1941'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='password',
            field=models.CharField(max_length=40),
        ),
    ]
