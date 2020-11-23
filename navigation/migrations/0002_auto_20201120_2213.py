

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('navigation', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chapter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Chapter_text', models.CharField(max_length=20)),
                ('Chapter_label', models.IntegerField(default=1)),
                ('Chapter_relateId', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='subject',
            name='subject_text',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AddField(
            model_name='chapter',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='navigation.Subject'),
        ),
    ]
