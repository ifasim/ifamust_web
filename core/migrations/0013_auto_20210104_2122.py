# Generated by Django 2.2.4 on 2021-01-04 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_auto_20210104_2120'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='label',
            field=models.CharField(choices=[('A', 'Available'), ('S', 'Sold Out'), ('P', 'Just In')], max_length=1),
        ),
    ]
