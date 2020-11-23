
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0002_userinfo_emailaddr'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='details',
            field=models.CharField(blank=True, max_length=10000, null=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='nickName',
            field=models.ImageField(max_length=30, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='password',
            field=models.CharField(max_length=20),
        ),
    ]
