
import builtins
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0004_auto_20201121_1451'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserHeadPortrait',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('headPortrait', models.ImageField(blank=True, null=True, upload_to=builtins.id)),
            ],
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='headPortrait',
        ),
        migrations.AddField(
            model_name='userheadportrait',
            name='userinfo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='register.Userinfo'),
        ),
    ]
