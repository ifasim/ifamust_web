# Generated by Django 2.2.4 on 2021-01-06 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_auto_20210106_0138'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female')], default=1, max_length=2),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('T', 'Tights'), ('S', 'Shorts'), ('TB', 'Sports Bra'), ('P', 'Pants')], max_length=2),
        ),
    ]