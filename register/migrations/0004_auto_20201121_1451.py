
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0003_auto_20201121_1107'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='nickName',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
