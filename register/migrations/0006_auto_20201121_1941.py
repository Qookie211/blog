
from django.db import migrations, models
import register.models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0005_auto_20201121_1537'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userheadportrait',
            name='headPortrait',
            field=models.ImageField(blank=True, null=True, upload_to=register.models.UserHeadPortrait.get_upload_path),
        ),
    ]
