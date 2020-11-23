
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='emailAddr',
            field=models.EmailField(max_length=254, null=True),
        ),
    ]
