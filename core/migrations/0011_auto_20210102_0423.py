# Generated by Django 2.2.4 on 2021-01-02 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_auto_20201219_1418'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('D', 'Dog'), ('P', 'Puppies'), ('BG', 'Big Dogs')], max_length=2),
        ),
    ]
