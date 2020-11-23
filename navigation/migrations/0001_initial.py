
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject_text', models.CharField(max_length=20)),
                ('subject_sequence', models.IntegerField(default=5)),
            ],
            options={
                'ordering': ['subject_sequence'],
            },
        ),
    ]
